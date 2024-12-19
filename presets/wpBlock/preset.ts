import fs from 'fs'
// This preset installs a gitignore.

export default definePreset({
  name: 'wpPackageJson-preset',

  handler: async (context) => {
    await prompt({
      title: 'prompt block name',
      name: 'blockName',
      text: 'What is the name of the block?',
      default: 'new-block',
    })

    await prompt({
      title: 'prompt block namespace',
      name: 'blockNameSpace',
      text: 'What is the block namespace (nameSpace/block-name)?',
      default: 'wp',
    })

    await prompt({
      title: 'prompt block title',
      name: 'blockTitle',
      text: 'What is the block title (visible in editor)?',
      default: 'New Block',
    })

    const blockName = context.prompts.blockName
    const blockNameSpace = context.prompts.blockNameSpace
    const blockTitle = context.prompts.blockTitle

    await extractTemplates({
      title: `Extracting templates to root for ${blockName}`,
      to: blockName,
    })

    await renamePaths({
      title: `Renaming block-plugin.php to ${blockName}.php`,
      paths: `${blockName}/**/block-plugin.php`,
      transformer: ({ name }) => `${blockName}.php`,
    })

    await fs.writeFileSync(`ryan.txt`, '@@katie @@ryan', 'utf8')
    await fs.writeFileSync(`ryans.txt`, '@@katie @@ryan', 'utf8')

    await editFiles({
      title: `Replacing variables in ${blockName} files`,
      files: [`${blockName}/package.json`, `${blockName}/src/block.json`],
      operations: [
        {
          type: 'replace-variables',
          variables: {
            blockNameSpace: blockNameSpace,
            blockName: blockName,
            blockTitle: blockTitle,
          },
        },
      ],
    })

    await editFiles({
      files: 'ryan.txt',
      operations: [
        {
          type: 'replace-variables',
          variables: {
            katie: 'Katie Sveinson',
            ryan: 'Ryan Dejaegher',
          },
        },
      ],
    })

    await executeCommand({
      title: `Installing @wordpress/scripts in ${blockName}`,
      command: 'npm',
      arguments: [
        'install',
        '--prefix',
        `${blockName}`,
        '@wordpress/scripts',
        '--save-dev',
      ],
    })
  },
})
