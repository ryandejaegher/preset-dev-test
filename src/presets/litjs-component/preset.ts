import * as changeCase from '../../utils/changeCase.js'
// This preset installs a gitignore.
export default definePreset({
  name: 'litjs-component-preset',

  handler: async (context) => {
    // Prompt for component tag
    await prompt({
      title: 'Set component tag',
      name: 'componentTag',
      text: 'What is the name of the component tag?',
      default: 'new-component',
    })

    await prompt({
      title: 'Set folder location',
      name: 'componentFolderLocation',
      text: 'What folder would you like to place the component?',
      default: './',
    })

    const componentTag = context.prompts.componentTag
    const componentTagNoDashes = componentTag.replaceAll(/-/g, '')
    const componentClass = changeCase.pascalCase(componentTag)
    const componentFolderLocation = context.prompts.componentFolderLocation

    await extractTemplates({
      title: 'Extracting litjs-component templates to root',
      to: `${componentFolderLocation}/${componentClass}/`,
    })

    // Rename Folders
    // await renamePaths({
    //   title: 'Renaming component folders',
    //   paths: `**/${componentClass}/lit-component`,
    //   transformer: ({ name }) => componentClass,
    // })

    // Rename files
    await renamePaths({
      title: 'Renaming component files',
      paths: `**/${componentClass}/lit-component.*`,
      transformer: ({ name, ext }) => {
        name.replace('lit-component', componentClass)
        console.log(name, ext)
        const newName = `${name.replace('lit-component', componentClass)}${ext}`
        return newName
      },
    })

    // Replace variables
    await editFiles({
      title: `Replacing variables in ${componentClass} files`,
      files: [`**/*/${componentClass}*.js`],
      operations: [
        {
          type: 'replace-variables',
          variables: {
            componentTag: componentTag,
            componentClass: componentClass,
            componentFlat: componentTagNoDashes,
          },
        },
      ],
    })
  },
})
