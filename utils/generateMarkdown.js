// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, install, usage, collab, test, license, github, email}) {
  return `# ${title}

# Table of Contents
[Description](#description) - 
[Install](#installation) - 
[Usage](#usage) - 
[Contributing](#contributing) - 
[Test](#tests) - 
[License](#license) - 
[Contact](#contact)

## Description
${description}
  
## Installation Instructions
${install}
  
## Usage Information
${usage}
  
## Contribution Guidelines
${collab}
  
## Test Instructions
${test}
  
## License Information
${license}
  
## Contact Me
[GitHub](https://github.com/${github})<br>
Email: ${email}
`;
}

module.exports = {
  generateMarkdown,
};
