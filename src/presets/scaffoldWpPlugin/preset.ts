export default definePreset({
  name: 'scaffoldWpPlugin',

  handler: async (context) => {
    await prompt({
      title: 'Plugin Name',
      name: 'pluginName',
      text: 'What is the name of your plugin?',
      default: 'My Plugin',
    })

    await prompt({
      title: 'Plugin Slug',
      name: 'pluginSlug',
      text: 'What is the slug for your plugin? (used for folder and file names)',
      default: 'my-plugin',
    })

    await prompt({
      title: 'Plugin Namespace',
      name: 'pluginNamespace',
      text: 'What is the namespace for your plugin?',
      default: 'MyPlugin',
    })

    await editFiles({
      files: ['fake-file.js'],
      operations: [
        {
          type: 'replace-variables',
          variables: {
            pluginName: '{{pluginName}}',
            pluginSlug: '{{pluginSlug}}',
            pluginNamespace: '{{pluginNamespace}}',
          },
        },
      ],
    })
  },
})
