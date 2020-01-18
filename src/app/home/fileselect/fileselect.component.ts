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
  value;
  prefs;
  defaultPath;
  filePath;

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
      properties: ["openFile", "multiSelections"]
    });
    if (this.fileresult === undefined) {
      this.selectedFile = null;
      this.isFileSelected = false;
    } else {
      this.selectedFile = this.fileresult;
      this.isFileSelected = true;
      alert(this.selectedFile);
      alert(path.dirname("C:/Windows/Fonts/8514fix.fon"));
      alert(path.dirname(this.selectedFile.replace(/\\/g, "/")));

      this.prefs.set("lastFileOpenedDirectory", "C:\\");
    }
  }

  CreatePDF() {
    this.generalservice.GeneratePDF(this.selectedFile);
  }
}
