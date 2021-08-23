// Returns a badge that is positioned next to the title of the README
function renderLicenseBadge(license) {
  let response;
  switch (license) {
    case 'MIT':
      response = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
      break;
    case 'GNU': 
      response = `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`
      break;
    case 'ISC':
      response = `![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)`
      break;
    case 'Apache':
      response = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
      break;
    case 'None':
      response = ``
    default:
      break;
  };

  return response;
}

// Returns a link to the license section if there was a license selected
function renderLicenseLink(license) {
  if (license === 'None') {
    return ``
  } else {
    return `- [License](#license)`
  }
}

// Returns text to the license section based on 4 license options given
function renderLicenseSection(license, year, github) {
 if (license === 'MIT') {
    return `## License
[${license} License Copyright (c) ${year} ${github}](LICENSE)`
  } else if (license === 'ISC' || license === 'Apache'){
    return `## License
[Copyright (c) ${year} ${github}](LICENSE)`
  } else if (license === 'GNU') {
    return `## License
[Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/> Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.](LICENSE)`
  }else {
    return ''
  }
}

// Takes the data and inputs it into a markdown file
function generateMarkdown({title, description, install, usage, collab, test, license, year, github, email}) {
  return `# ${title}  ${renderLicenseBadge(license)}

# Table of Contents
[Description](#description) - 
[Install](#installation) - 
[Usage](#usage) - 
[Contributing](#contributing) - 
[Test](#tests) - 
[Contact](#contact) ${renderLicenseLink(license)}

## Description
${description}
  
## Installation
${install}
  
## Usage
${usage}
  
## Contributing
${collab}
  
## Tests
${test}

## Contact
[GitHub](https://github.com/${github})<br>
Email: ${email}

${renderLicenseSection(license, year, github)}`
}

module.exports = {
  generateMarkdown,
};