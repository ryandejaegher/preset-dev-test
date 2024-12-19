// This preset installs a gitignore.
export default definePreset({
  name: 'git-preset',

  handler: async () => {
    await extractTemplates({
      title: 'Extracting gitignore templates to root',
      extractDotFiles: true,
    })
  },
})
