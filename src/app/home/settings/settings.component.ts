import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GeneralService } from "../../core/services";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  constructor(private router: Router, private generalservice: GeneralService) {}

  ngOnInit() {
    this.generalservice.ResizeToOriginal();
  }

  backtohome() {
    this.router.navigate(["fileselect"]);
  }
}
