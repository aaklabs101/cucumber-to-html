const inquirer = require("inquirer");
const { exec } = require("child_process");
const { ipcMain } = require("electron");

ipcMain.on("selected-file", (event, filePath) => {
  console.log(`Selected file: ${filePath}`);
  process.exit();
});

const questions = [
  {
    type: "confirm",
    name: "chooseFile",
    message: "Do you want to choose a file?",
    default: true,
  },
];

inquirer.prompt(questions).then((answers) => {
  if (answers.chooseFile) {
    exec("npx electron .", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error}`);
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
      }
    });
  }
});
