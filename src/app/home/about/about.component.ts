import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GeneralService } from "../../core/services";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  constructor(
    private router: Router,
    private generalservice: GeneralService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "facebook",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/facebook.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "twitter",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/twitter.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/linkedin.svg"
      )
    );
  }

  ngOnInit() {
    this.generalservice.ResizeToOriginal();
  }

  backtohome() {
    this.router.navigate(["fileselect"]);
  }
}
