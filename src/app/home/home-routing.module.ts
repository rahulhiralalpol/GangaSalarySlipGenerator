import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FileselectComponent } from "./fileselect/fileselect.component";
import { ViewpdfComponent } from "./viewpdf/viewpdf.component";
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "fileselect",
        component: FileselectComponent
      },
      {
        path: "viewpdf",
        component: ViewpdfComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
