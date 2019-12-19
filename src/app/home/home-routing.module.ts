import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ViewpdfComponent } from "./viewpdf/viewpdf.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "viewpdf",
    component: ViewpdfComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
