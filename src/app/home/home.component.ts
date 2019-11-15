import { Component, OnInit } from "@angular/core";
import { ElectronService } from "../core/services";

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

  constructor(private electron: ElectronService) {}

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
}
