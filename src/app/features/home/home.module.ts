import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule, HomeComponents } from "./home-routing.module";

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: HomeComponents
})
export class HomeModule {}
