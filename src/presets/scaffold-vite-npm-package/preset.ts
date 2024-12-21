export default definePreset({
  name: 'vite-npm-package',

  handler: async (context) => {
    await prompt({
      title: 'Vite NPM Package',
      text: 'What is the name of your library?',
      name: 'libaryName',
    })
  },

  postInstall(options) {
    console.log('Success')
    return ['Success', 'Now do this']
  },
})
