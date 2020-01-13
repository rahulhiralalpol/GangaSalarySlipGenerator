import { Component, OnInit } from "@angular/core";
import { ElectronService } from "../core/services";
import { app } from "electron";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  RouterEvent
} from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  value: number;
  showLoadingIndicator = false;
  constructor(private electron: ElectronService, private router: Router) {}

  ngOnInit() {
    this.router.navigate(["fileselect"]);
  }

  ExitWindow() {
    this.electron.window.close();
  }

  MinWindow() {
    this.electron.window.minimize();
  }

  ShowAbout() {
    this.router.navigate(["about"]);
  }

  OpenSettings() {
    this.router.navigate(["settings"]);
  }
}
