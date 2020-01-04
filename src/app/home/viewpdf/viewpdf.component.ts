import { Component, OnInit } from "@angular/core";
import { GeneralService } from "../../core/services/general/general.service";
import { ElectronService } from "../../core/services";
import { Router } from "@angular/router";

@Component({
  selector: "app-viewpdf",
  templateUrl: "./viewpdf.component.html",
  styleUrls: ["./viewpdf.component.scss"]
})
export class ViewpdfComponent implements OnInit {
  pdfFileData: any;
  pdfFileName: string;
  constructor(
    private generalService: GeneralService,
    private electron: ElectronService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pdfFileData = this.generalService.pdfFileData;
    this.pdfFileName = this.generalService.pdfFileName;
    this.maximizeWin();
  }

  maximizeWin() {
    this.electron.window.maximizable = true;
    this.electron.window.maximize();
  }
  backtohome() {
    this.electron.window.resizable = true;
    this.electron.window.setSize(650, 260, true);
    this.electron.window.center();
    this.electron.window.resizable = false;
    this.electron.window.maximizable = false;
    this.router.navigate(["/fileselect"]);
  }
}
