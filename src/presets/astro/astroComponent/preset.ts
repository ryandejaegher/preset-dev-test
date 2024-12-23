export default definePreset({
  name: 'astroComponent',

  handler: async (context) => {
    // This should name the component file
    await prompt({
      title: 'Component Name',
      name: 'componentName',
      text: 'What is the name of your component?',
    })
  },
  postInstall(options) {
    console.log('Success')
    return ['Success', 'Now do this']
  },
})
