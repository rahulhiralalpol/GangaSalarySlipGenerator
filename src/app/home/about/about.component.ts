import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ElectronService } from "../../core/services";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
    constructor(private router: Router, private electron: ElectronService) {}

  ngOnInit() {
    this.electron.ResizeToOriginal();
  }

  backtohome() {
    this.router.navigate(["fileselect"]);
  }

  showTwitter() {
    this.electron.OpenURLinNewWindow("https://twitter.com/rahulhpol");
  }
  showLinkedin() {
    this.electron.OpenURLinNewWindow("https://www.linkedin.com/in/rahulpol");
  }
  showFacebook() {
    this.electron.OpenURLinNewWindow("https://www.facebook.com/rahul.h.pol");
  }
}
