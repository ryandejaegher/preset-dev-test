export default definePreset({
  name: 'ryan-demo-preset',

  handler: async () => {
    await executeCommand({
      command: 'ls',
      data(stdout) {
        console.log(stdout)
      },
    })
  },
})
