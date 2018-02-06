import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContactComponent } from "./";

const routes: Routes = [
  { path: "", component: ContactComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}

export const ContactComponents = [ContactComponent];
