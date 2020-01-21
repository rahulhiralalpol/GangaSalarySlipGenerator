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
  MatProgressBarModule,
  MatRadioModule,
  MatTabsModule
} from "@angular/material";
import { ViewpdfComponent } from "./viewpdf/viewpdf.component";
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";
import { FileselectComponent } from "./fileselect/fileselect.component";
import { AboutComponent } from "./about/about.component";
import { SettingsComponent } from "./settings/settings.component";

@NgModule({
  declarations: [
    HomeComponent,
    ViewpdfComponent,
    FileselectComponent,
    AboutComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatRadioModule,
    MatProgressBarModule,
    MatTabsModule,
    NgxExtendedPdfViewerModule
  ]
})
export class HomeModule {}
