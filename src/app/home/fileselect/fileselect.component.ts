import { Component, OnInit } from "@angular/core";
import { ElectronService } from "../../core/services";
import { GeneralService } from "../../core/services/general/general.service";

@Component({
  selector: "app-fileselect",
  templateUrl: "./fileselect.component.html",
  styleUrls: ["./fileselect.component.scss"]
})
export class FileselectComponent implements OnInit {
  value: number;

  selectedFile: any = null;
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
    this.generalservice.GeneratePDF(this.selectedFile);
  }
}
