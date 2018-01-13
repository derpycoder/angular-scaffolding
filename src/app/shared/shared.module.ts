import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GlobalErrorHandlerService, GoogleAnalyticsService } from "./";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    },
    GoogleAnalyticsService
  ],
  exports: []
})
export class SharedModule {}
