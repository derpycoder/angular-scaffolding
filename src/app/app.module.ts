import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ServiceWorkerModule } from "@angular/service-worker";

import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";

import { FeaturesModule } from "./features/features.module";
import { AppComponent, HeaderComponent, FooterComponent } from "./";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "angular-scaffolding" }),
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    FeaturesModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
