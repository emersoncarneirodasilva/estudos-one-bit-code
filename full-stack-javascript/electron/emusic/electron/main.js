const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const fs = require("node:fs");
let mainWindow;

const musicDir = path.join(__dirname, "..", "public", "musics");

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: `${__dirname}/preload.js`,
    },
  });
  mainWindow.loadURL("http://localhost:3000");
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(async () => {
  createWindow();
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

ipcMain.on("music-upload", (event, file) => {
  const filePath = path.join(musicDir, file.name);

  fs.writeFile(filePath, file.data, async (err) => {
    if (err) {
      mainWindow.webContents.send("toast:recive", err);
    } else {
      sendUpdateList();

      mainWindow.webContents.send(
        "toast:recive",
        "Arquivo recebido com sucesso!"
      );
    }
  });
});

ipcMain.on("music-get", async () => {
  sendUpdateList();
});

async function sendUpdateList() {
  const files = await fs.promises.readdir(musicDir);

  mainWindow.webContents.send("music-list", files);
}

ipcMain.on("music-to-play", (event, file) => {
  mainWindow.webContents.send("music-playable", file);
});

ipcMain.on("music-delete", async (event, file) => {
  const filePath = path.join(musicDir, file);

  fs.unlink(filePath, async (err) => {
    if (err) {
      mainWindow.webContents.send("toast:recive", err);
    } else {
      sendUpdateList();
      mainWindow.webContents.send(
        "toast:recive",
        "Arquivo deletado com sucesso!"
      );
    }
  });
});
