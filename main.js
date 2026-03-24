const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // Allows you to use Node.js inside your HTML
    }
  });

  win.loadFile('machine_learning.html'); // This loads your local file
}

app.whenReady().then(createWindow);