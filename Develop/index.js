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
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${answers.username}</h1>
      <p class="lead">I am from ${answers.location}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.github}</li>
        <li class="list-group-item">My project title is: ${answers.pTitle}</li>
        <li class="list-group-item">Description:  ${answers.pDescription}</li>
        <li class="list-group-item">Here is the project's Table of Contents:  ${answers.pToc}</li>
        <li class="list-group-item">Installation Details:  ${answers.iDetails}</li>
        <li class="list-group-item">User Details:  ${answers.uDetails}</li>
        <li class="list-group-item">License Details:  ${answers.license}</li>
        <li class="list-group-item">How to contribute to the project:  ${answers.contribution}</li>
        <li class="list-group-item">Project testing:  ${answers.testing}</li>
        <li class="list-group-item">Questions about the project:  ${answers.questions}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
  }
  
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
  
      await writeFileAsync("index.html", html);
  
      console.log("Successfully wrote to index.html");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();
  
