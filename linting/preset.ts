export default definePreset({
  name: 'linting-preset',

  handler: async () => {
    await extractTemplates({
      from: 'linting',
      extractDotFiles: true,
    })
    await installPackages({
      for: 'node',
      packages: [
        'eslint',
        'eslint-plugin-import',
        'eslint-plugin-promise',
        'eslint-plugin-prettier',
        'prettier',
        'stylelint',
        'stylelint-config-standard',
        'stylelint-order',
      ],
      dev: true,
    })
  },
})
