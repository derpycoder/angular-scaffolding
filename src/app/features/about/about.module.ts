import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  AboutRoutingModule,
  AboutComponents
} from "./about-routing.module";

@NgModule({
  imports: [CommonModule, AboutRoutingModule],
  declarations: AboutComponents
})
export class AboutModule {}
