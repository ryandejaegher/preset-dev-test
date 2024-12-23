export default definePreset({
  name: 'scaffoldAstroTheme',

  handler: async (context) => {
    // Add integrations

    await prompt({
      title: 'Theme Name',
      name: 'themeName',
      text: 'What is the name of your theme?',
      default: 'My Theme',
    })

    const themeName = context.prompts.themeName

    await extractTemplates({
      to: themeName,
    })

    // await prompt({
    //   title: 'Theme Slug',
    //   name: 'themeSlug',
    //   text: 'What is the slug for your theme? (used for folder and file names)',
    //   default: 'my-theme',
    // })

    // await prompt({
    //   title: 'Theme Namespace',
    //   name: 'themeNamespace',
    //   text: 'What is the namespace for your theme?',
    //   default: 'MyTheme',
    // })

    await editFiles({
      files: ['fake-file.js'],
      operations: [
        {
          type: 'replace-variables',
          variables: {
            themeName: '{{themeName}}',
            themeSlug: '{{themeSlug}}',
            themeNamespace: '{{themeNamespace}}',
          },
        },
      ],
    })
  },
  postInstall(options) {
    return [`cd ${options.context.prompts.themeName}`, 'npm install']
  },
})
