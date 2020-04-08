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
getData();

async function getData() {
    try {
        const answers = await inquirer.prompt([
            {
            message: "What is your GitHub username? ",
            name: "name"
        },
            {
            message: "Which repository are you looking for? ",
            name: "repo"

        },
        ]);
        console.log(answers);
        
    } catch (err) {
        console.log(err);
    }

}

