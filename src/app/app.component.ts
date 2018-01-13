import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { GoogleAnalyticsService } from "./shared/";

declare var ga;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    public router: Router,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.googleAnalyticsService.emitPageEvent(event);
      }
    });
  }
}
