import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GeneralService } from "../../core/services";
import * as ElectronPrefs from "electron-prefs";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  prefs;

  constructor(private router: Router, private generalservice: GeneralService) {}

  ngOnInit() {
    this.generalservice.ResizeToOriginal();
    this.prefs = new ElectronPrefs({
      fileName: "config.js"
    });
  }

  backtohome() {
    this.router.navigate(["fileselect"]);
  }

  saveandbacktohome() {
    alert(this.prefs.get("lastFileOpenedDirectory"));
    this.router.navigate(["fileselect"]);
  }
}
