export default definePreset({
  name: 'linting-preset',

  handler: async () => {
    await extractTemplates({
      title: 'Extracting linting templates to root',
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
        'stylelint-config-standard-scss',
        'postcss-lit',
      ],
      dev: true,
    })

    await executeCommand({
      command: 'npx',
      arguments: ['sort-package-json'],
      data(stdout) {
        console.log(stdout)
      },
    })
  },
})
