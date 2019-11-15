import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GeneralService {
  constructor() {}

  GeneratePDF(inputExcel, outputPDF) {
    alert(inputExcel + "Working from Service...." + outputPDF);
  }
}
