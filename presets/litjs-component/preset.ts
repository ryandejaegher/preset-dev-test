import * as changeCase from 'change-case'
// This preset installs a gitignore.
export default definePreset({
  name: 'litjs-component-preset',

  handler: async (context) => {
    await extractTemplates({
      title: 'Extracting litjs-component templates to root',
    })

    // Prompt for component tag
    await prompt({
      title: 'Set component tag',
      name: 'componentTag',
      text: 'What is the name of the component tag?',
      default: 'new-component',
    })

    const componentTag = context.prompts.componentTag
    const componentClass = changeCase.pascalCase(componentTag)
    // Rename Folders
    await renamePaths({
      title: 'Renaming component folders',
      paths: 'lit-component',
      transformer: ({ name }) => componentTag,
    })

    // Rename files
    await renamePaths({
      title: 'Renaming component files',
      paths: `${componentTag}/lit-component.*`,
      transformer: ({ name, ext }) => {
        name.replace('lit-component', componentTag)
        console.log(name, ext)
        const newName = `${name.replace('lit-component', componentTag)}${ext}`
        return newName
      },
    })

    // Replace variables
    await editFiles({
      title: `Replacing variables in ${componentTag} files`,
      files: [`${componentTag}/*.js`],
      operations: [
        {
          type: 'replace-variables',
          variables: {
            componentTag: componentTag,
            componentClass: componentClass,
          },
        },
      ],
    })
  },
})
