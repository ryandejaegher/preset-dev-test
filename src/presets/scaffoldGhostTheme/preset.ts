export default definePreset({
  name: 'scaffoldGhostTheme',
  handler: async (context) => {
    await extractTemplates({})
  },
  postInstall(options) {
    return ['Success', 'Now do this']
  },
})
