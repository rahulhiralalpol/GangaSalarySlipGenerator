import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GeneralService } from "../../core/services";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  constructor(private router: Router, private generalservice: GeneralService) {}

  ngOnInit() {
    this.generalservice.ResizeToOriginal();
  }

  backtohome() {
    this.router.navigate(["fileselect"]);
  }
}
