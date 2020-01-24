import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ElectronService } from "../../core/services";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  prefs;

  constructor(private router: Router, private electron: ElectronService) {}

  ngOnInit() {
    this.electron.ResizeToOriginal();
    this.prefs = new this.electron.ElectronPrefs({
      fileName: "config.js"
    });
  }

  backtohome() {
    this.router.navigate(["fileselect"]);
  }

  saveandbacktohome() {
    this.router.navigate(["fileselect"]);
  }
}
