const { app, BrowserWindow, dialog, ipcMain } = require("electron");
const path = require("path");
const { cucumberCustomObject } = require("./utils/cucumberCustomObject");
const { generateHTMLTable } = require("./utils/generateHTMLTable");
const fs = require("fs").promises; // Import the fs module to read files
const pdf = require("html-pdf");
// const inquirer = require("inquirer");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "index.html"));

  ipcMain.handle("open-file-dialog", async (event) => {
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ["openFile"],
    });
    // Read the selected file and log its data
    if (result.filePaths.length > 0) {
      const filePath = result.filePaths[0];
      try {
        const data = await fs.readFile(filePath, "utf8");
        // const customData = await getCustomData(JSON.parse(data));
        const { gridData } = await cucumberCustomObject(JSON.parse(data));

        // Generate HTML table
        const html = generateHTMLTable(gridData);

        // Write HTML to a file
        const outputPath = path.join(__dirname, "html/output.html");
        await fs.writeFile(outputPath, html, "utf8");

        // Send the path of the generated HTML file to the renderer process
        event.sender.send("html-generated", outputPath);
        console.log("HTML file created successfully:", outputPath);
        // // Create PDF with html-pdf
        // pdf.create(html).toFile("pdf/output.pdf", (err, res) => {
        //   if (err) {
        //     console.error("Error generating PDF:", err);
        //     return;
        //   }

        //   // Send the path of the generated PDF to the renderer process
        //   event.sender.send("pdf-generated", res.filename);
        //   console.log("PDF created successfully:", res);
        // });
        // console.log("File data:", gridData);
      } catch (err) {
        console.error("Error reading file:", err);
      }
    }

    return result;
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
