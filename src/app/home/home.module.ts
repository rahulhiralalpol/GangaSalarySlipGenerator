import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";

import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressBarModule
} from "@angular/material";
import { ViewpdfComponent } from "./viewpdf/viewpdf.component";

@NgModule({
  declarations: [HomeComponent, ViewpdfComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressBarModule
  ]
})
export class HomeModule {}
