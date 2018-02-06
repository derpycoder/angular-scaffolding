import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FeaturesRoutingModule } from "./features-routing.module";

import { PageNotFoundComponent } from "./404/404.component";

@NgModule({
  imports: [CommonModule, FeaturesRoutingModule],
  declarations: [PageNotFoundComponent],
  providers: [],
  exports: [PageNotFoundComponent]
})
export class FeaturesModule {}
