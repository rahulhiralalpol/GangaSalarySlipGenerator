import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GeneralService } from "../../core/services";
import { ElectronService } from "../../core/services";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  win;

  constructor(
    private router: Router,
    private generalservice: GeneralService,
    private electron: ElectronService
  ) {}

  ngOnInit() {
    this.generalservice.ResizeToOriginal();
  }

  backtohome() {
    this.router.navigate(["fileselect"]);
  }

  showTwitter() {
    this.OpenURLinNewWindow("https://twitter.com/rahulhpol");
  }
  showLinkedin() {
    this.OpenURLinNewWindow("https://www.linkedin.com/in/rahulpol");
  }
  showFacebook() {
    this.OpenURLinNewWindow("https://www.facebook.com/rahul.h.pol");
  }

  OpenURLinNewWindow(url: string) {
    this.win = new this.electron.remote.BrowserWindow({
      frame: true,
      autoHideMenuBar: true
    });
    this.win.maximize();
    this.win.loadURL(url);
  }
}
