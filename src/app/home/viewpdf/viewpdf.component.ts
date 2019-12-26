import { Component, OnInit } from "@angular/core";
import { GeneralService } from "../../core/services/general/general.service";

@Component({
  selector: "app-viewpdf",
  templateUrl: "./viewpdf.component.html",
  styleUrls: ["./viewpdf.component.scss"]
})
export class ViewpdfComponent implements OnInit {
  pdfDocument: string = null;
  constructor(private generalService: GeneralService) {}

  ngOnInit() {
    this.pdfDocument = this.generalService.pdfFileData;
    console.log(this.pdfDocument);
  }
}
