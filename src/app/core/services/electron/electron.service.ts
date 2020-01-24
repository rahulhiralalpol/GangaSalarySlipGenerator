import { Injectable } from "@angular/core";

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, remote, BrowserWindow } from "electron";
import * as childProcess from "child_process";
import * as fs from "fs";
import * as ElectronPrefs from "electron-prefs";

@Injectable({
  providedIn: "root"
})
export class ElectronService {
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  window: BrowserWindow;
  fs: typeof fs;
  ElectronPrefs: typeof ElectronPrefs;

  get isElectron() {
    return window && window.process && window.process.type;
  }

  constructor() {
    // Conditional imports
    if (this.isElectron) {
      this.ipcRenderer = window.require("electron").ipcRenderer;
      this.webFrame = window.require("electron").webFrame;
      this.remote = window.require("electron").remote;
      this.window = window.require("electron").remote.getCurrentWindow();

      this.childProcess = window.require("child_process");
      this.fs = window.require("fs");
      this.ElectronPrefs = ElectronPrefs;
    }
  }
  // Function to Resize window to original size
  ResizeToOriginal() {
    this.window.resizable = true;
    this.window.setSize(650, 260, true);
    this.window.center();
    this.window.resizable = false;
    this.window.maximizable = false;
  }

  OpenURLinNewWindow(url) {
    let win;
    win = new remote.BrowserWindow({
      frame: true,
      autoHideMenuBar: true,
      webPreferences: { plugins: true }
    });
    win.maximize();
    win.loadURL(url);
  }
}
