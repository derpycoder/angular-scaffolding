import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./features/404/404.component";

const routes: Routes = [
  { path: "**", component: PageNotFoundComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
