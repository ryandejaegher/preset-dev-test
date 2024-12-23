export default definePreset({
  name: 'scaffoldGhostTheme',
  handler: async (context) => {
    await extractTemplates({
      extractDotFiles: true,
    })
  },
  postInstall(options) {
    return ['Success', 'Now do this']
  },
})
