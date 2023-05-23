// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

/// TODO: Create an array of questions for user input
const questions = [
  {
    name: 'projectTitle',
    type: 'input',
    message: 'Enter the title of your project:',
  },
  {
    name: 'description',
    type: 'input',
    message: 'Enter a description for your project:',
  },
  {
    name: 'installation',
    type: 'input',
    message: 'Enter installation instructions:',
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Enter usage information:',
  },
  {
    name: 'license',
    type: 'list',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    name: 'contributing',
    type: 'input',
    message: 'Enter contribution guidelines:',
  },
  {
    name: 'tests',
    type: 'input',
    message: 'Enter test instructions:',
  },
  {
    name: 'githubUsername',
    type: 'input',
    message: 'Enter your GitHub username:',
  },
  {
    name: 'email',
    type: 'input',
    message: 'Enter your email address:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md file generated successfully.');
    }
  });
}

// TODO: Create a function to generate the table of contents
function generateTableOfContents() {
  return `
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
`;
}

// TODO: Create a function to generate the license badge
function generateLicenseBadge(license) {
  let licenseBadge = '';
  switch (license) {
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL 3.0':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD 3-Clause':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    default:
      licenseBadge = '';
      break;
  }
  return licenseBadge;
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Generate the license badge
    const licenseBadge = generateLicenseBadge(answers.license);

    // Generate the table of contents
    const tableOfContents = generateTableOfContents();

    // Generate the README content using the user's answers
    const readmeContent = `
# ${answers.projectTitle}

${licenseBadge}

## Description
${answers.description}

${tableOfContents}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For additional questions, contact me via:
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: ${answers.email}

`;

    // Write the README file
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();