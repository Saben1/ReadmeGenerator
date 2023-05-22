// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
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
  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      // Generate the README content using the user's answers
      const readmeContent = `
  # ${answers.projectTitle}
  
  ## ${answers.description}
  ...
  
  ## ${answers.installation}
  ...
  
  ## ${answers.usage}
  ...
  
  ## ${answers.license}
  ...
  
  ## ${answers.contributing}
  ...
  
  ## ${answers.tests}
  ...
  
  ## ${answers.githubUsername}
  ...

  ## ${answers.email}
  ...
  `;
  
      // Write the README file
      writeToFile('README.md', readmeContent);
    });
  }
  

// Function call to initialize app
init();
