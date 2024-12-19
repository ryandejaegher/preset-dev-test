// This preset installs a gitignore.
export default definePreset({
  name: 'wpPackageJson-preset',

  handler: async () => {



    await executeCommand({
      title: 'Add wp start block dev command to package.json - npm run start',
      command: 'npm',
      arguments: ['pkg', 'set', 'scripts.start=wp-scripts start'],
      data(stdout) {
        console.log('Command output:', stdout);
      },
    }).catch(error => {
      console.error('Command failed:', error);
    });

    await executeCommand({
      title: 'Add wp start block dev command to package.json - npm run start:hot',
      command: 'npm',
      arguments: ['pkg', 'set', 'scripts.start:hot=wp-scripts start --hot'],
      data(stdout) {
        console.log('Command output:', stdout);
      },
    }).catch(error => {
      console.error('Command failed:', error);
    });

    await executeCommand({
      title: 'Add wp start block dev command to package.json - npm run start:playground',
      command: 'npm',
      arguments: ['pkg', 'set', 'scripts.start:playground=npx @wp-now/wp-now start & wp-scripts start'],
      data(stdout) {
        console.log('Command output:', stdout);
      },
    }).catch(error => {
      console.error('Command failed:', error);
    });

    await executeCommand({
      title: 'Add wp build block dev command to package.json - npm run build',
      command: 'npm',
      arguments: ['pkg', 'set', 'scripts.build=wp-scripts build'],
      data(stdout) {
        console.log('Command output:', stdout);
      },
    }).catch(error => {
      console.error('Command failed:', error);
    });
  },
})
