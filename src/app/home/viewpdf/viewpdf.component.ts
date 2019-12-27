import { Component, OnInit } from "@angular/core";
import { GeneralService } from "../../core/services/general/general.service";

@Component({
  selector: "app-viewpdf",
  templateUrl: "./viewpdf.component.html",
  styleUrls: ["./viewpdf.component.scss"]
})
export class ViewpdfComponent implements OnInit {
  pdfFileData: any;
  pdfFileName: string;
  constructor(private generalService: GeneralService) {}

  ngOnInit() {
    this.pdfFileData = this.generalService.pdfFileData;
    this.pdfFileName = this.generalService.pdfFileName;
  }
}
