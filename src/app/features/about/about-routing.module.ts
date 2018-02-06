import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./";

const routes: Routes = [
  { path: "", component: AboutComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}

export const AboutComponents = [AboutComponent];
