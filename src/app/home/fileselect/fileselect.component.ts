import { Component, OnInit } from "@angular/core";
import { ElectronService } from "../../core/services";
import { GeneralService } from "../../core/services/general/general.service";
import * as ElectronPrefs from "electron-prefs";
import * as path from "path";

@Component({
  selector: "app-fileselect",
  templateUrl: "./fileselect.component.html",
  styleUrls: ["./fileselect.component.scss"]
})
export class FileselectComponent implements OnInit {
  value: number;
  prefs;
  defaultPath: string;
  filePath: string;

  selectedFile: string = null;
  fileresult: any;
  isFileSelected: boolean;

  constructor(
    private electron: ElectronService,
    private generalservice: GeneralService
  ) {
    this.generalservice.progress.subscribe(progvalue => {
      this.value = parseInt(progvalue) + 1;
    });
  }

  ngOnInit() {
    this.generalservice.ResizeToOriginal();
    this.prefs = new ElectronPrefs({
      fileName: "config.js"
    });
  }

  FileOpenDialog() {
    const { dialog } = require("electron").remote;

    if (this.prefs.get("lastFileOpenedDirectory")) {
      this.defaultPath = this.prefs.get("lastFileOpenedDirectory");
    } else {
      this.defaultPath = "C:\\";
    }

    this.fileresult = dialog.showOpenDialogSync(this.electron.window, {
      title: "Select the Excel File to be Processed",
      defaultPath: this.defaultPath,
      filters: [{ name: "Excel Files", extensions: ["xls", "xlsx"] }],
      properties: ["openFile"]
    });
    if (this.fileresult === undefined) {
      this.selectedFile = null;
      this.isFileSelected = false;
    } else {
      this.selectedFile = this.fileresult;
      this.isFileSelected = true;
      this.filePath = escape(this.selectedFile)
        .split("%5C")
        .join("\\")
        .split("%20")
        .join(" ")
        .split("%3A")
        .join(":");
      this.prefs.set("lastFileOpenedDirectory", path.dirname(this.filePath));
    }
  }

  CreatePDF() {
    this.generalservice.GeneratePDF(this.selectedFile);
  }
}
