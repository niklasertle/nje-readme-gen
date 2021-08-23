const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown.js');

// Array of questions to prompt
const questions = 
    [
        {
            type: 'input',
            message: 'What would you like to file to be called?',
            name: 'fileName'
        },
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter a description:',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Enter installation instructions:',
            name: 'install'
        },
        {
            type: 'input',
            message: 'Enter usage information:',
            name: 'usage'
        },  
        {
            type: 'input',
            message: 'Enter contribution guidelines:',
            name: 'collab'
        },  
        {
            type: 'input',
            message: 'Enter test instructions:',
            name: 'test'
        },  
        {
            type: 'list',
            message: 'What license do you use?',
            choices: ['Apache', 'GNU', 'ISC', 'MIT', 'None'],
            name: 'license'
        },
        {
            type: 'input',
            message: 'What year was your app created in?',
            name: 'year'
        },    
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github'
        },  
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        }
    ];

// Writes the README file using fs
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, genMarkdown.generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('README created!')
    );
};

// Prompts the user with questions and uses the responses to generate a README
function init() {
    inquirer.prompt(questions).then((response) => {
        const {fileName, ...data} = response;
        writeToFile(fileName, data);
    })
};

// Function call to initialize app
init();