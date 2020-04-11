// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

// Initiate console request for GitHub repo
const inquirer = require("inquirer");
const fs = require("fs");
async function start() {


    const answers = await getData();
    const ghData = await getGHdata(answers);
}
// request user input which will be used to build READ.ME
async function getData() {
    try {
        const answers = await inquirer.prompt([
            {
                message: "What is your GitHub username? ",
                name: "username"
            },
            {
                message: "Which project title are you looking for? ",
                name: "pTitle"

            },
            {
                message: "Describe your project? ",
                name: "pDescription"

            },
            {
                message: "Provide your table of contents? ",
                name: "pToc"

            },
            {
                message: "Provide your installation details? ",
                name: "iDetails"

            },
            {
                message: "Provide your usage details? ",
                name: "uDetails"

            },
            {
                message: "What your licensing requirements? ",
                name: "license"

            },
            {
                message: "How can others contribute to your project? ",
                name: "contribution"

            },
            {
                message: "How has the code been tested? ",
                name: "testing"

            },
            {
                message: "How should questions be submitted? ",
                name: "questions"

            },

        ]);
        console.log(answers);
        return answers

    } catch (err) {
        console.log(err);
    }

}
// request data from GitHub 
async   function    getGHdata({name}) {

    const res = await axios({
        headers:{'Authorization': `token ${token}`},
        url: `https://api.github.com/users/${username}`,
        method: 'GET'})


}
// build READ.ME template // check out last activity for ideas
function generateHTML(answers) {
    return `
      # My name is ${answers.username}
      ## I am from ${answers.location}
      [My GitHub username is](${answers.github})
      ## My project title is: ${answers.pTitle}
      ## Description:  ${answers.pDescription}
      ## Here is the project's Table of Contents:  * ${answers.pToc}
      ## Installation Details:  ${answers.iDetails}
      ## User Details:  ${answers.uDetails}
      ## License Details:  ${answers.license}
      ## How to contribute to the project:  ${answers.contribution}
      ## Project testing:  ${answers.testing}
      ## Questions about the project:  ${answers.questions}
`  }
  
  async function writeFileAsync(path, data)   {
      fs.writeFile(path, data, "utf8", (err) => {
          if (err)  console.error(err);
      })
  }
  async function init() {
    console.log("hi")
    try {
      const answers = await getData();
  
      const html = generateHTML(answers);
  
      await writeFileAsync("README.md", html);
  
      console.log("Successfully wrote to README.md");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();
  
