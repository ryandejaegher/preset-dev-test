// This preset installs a gitignore.
export default definePreset({
  name: 'git-preset',

  handler: async () => {
    await extractTemplates({
      from: 'git',
      extractDotFiles: true,
    })

  },
})
