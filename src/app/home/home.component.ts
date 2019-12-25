import { Component, OnInit } from "@angular/core";
import { ElectronService } from "../core/services";
import { app } from "electron";
import { GeneralService } from "../core/services/general/general.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  color = "warn";
  mode = "indeterminate";

  selectedFile: any = null;
  fileresult: any;
  isFileSelected: boolean;

  constructor(
    private electron: ElectronService,
    private generalService: GeneralService,
    private router: Router
  ) {}

  ngOnInit() {}

  ExitWindow() {
    this.electron.window.close();
  }

  MinWindow() {
    this.electron.window.minimize();
  }

  FileOpenDialog() {
    const { dialog } = require("electron").remote;

    this.fileresult = dialog.showOpenDialogSync(this.electron.window, {
      title: "Select the Excel File to be Processed",
      defaultPath: "C:\\",
      filters: [{ name: "Excel Files", extensions: ["xls", "xlsx"] }],
      properties: ["openFile", "multiSelections"]
    });
    if (this.fileresult === undefined) {
      this.selectedFile = null;
      this.isFileSelected = false;
    } else {
      this.selectedFile = this.fileresult;
      this.isFileSelected = true;
    }
  }

  CreatePDF() {
    this.OpenPDF(this.selectedFile, this.generalService.GeneratePDF);
    this.router.navigate(["viewpdf"]);
    // this.generalService.GeneratePDF(this.selectedFile);
  }

  OpenPDF = function(file, callback) {
    // let res = { pdfuri: null };
    // res = callback(file);
    callback(file);
    // return res;
  };
}
