// This preset installs Vitest and Playwright with their respective plugins and configurations.
export default definePreset({
  name: 'js-testing-preset',

  handler: async () => {
    await extractTemplates({
      from: 'js-testing',
      extractDotFiles: true,
    })
    await installPackages({
      for: 'node',
      packages: [
        'vitest',
        '@playwright/test'

      ],
      dev: true,
    })

    // Install playwright browsers
    await executeCommand({
      command: 'npx',
      arguments: ['playwright','install'],
      data(stdout) {
        console.log(stdout)
      },
    })
  },
})
