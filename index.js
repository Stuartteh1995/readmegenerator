
// create a constant so that application can use repository.
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter a description:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Enter installation instructions:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Enter usage information:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Enter contribution guidelines:',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Enter test instructions:',
    name: 'tests',
  },
  {
    type: 'list',
    message: 'Choose a license:',
    name: 'license',
    choices: ['MIT', 'IBM', 'Mozilla'],
  },
  {
    type: 'input',
    message: 'Enter your GitHub username:',
    name: 'github',
  },
  {
    type: 'input',
    message: 'Enter your email address:',
    name: 'email',
  },
];

//creating a const for the licence badge to reference with link.
const licenseBadge = {
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
  Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
};

//Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('successful');
    }
  });
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    // Generate the content of the README based on the user's input

    const content = `# ${response.title} 
${licenseBadge[response.license]}

## Description
${response.description}

## Table of Contents
- [Installation]
- [Usage]
- [License]
- [Contributing]
- [Tests]
- [Questions]

## Installation
${response.installation}

## Usage
${response.usage}

## License
This project is covered under the ${response.license} license.

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
For any questions, please reach out to [${response.github}](https://github.com/${response.github}) or email me at ${response.email}
`;

    writeToFile('README.md', content);
  });
}

// Function call to initialize app
init();
