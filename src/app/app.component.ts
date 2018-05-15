import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router, NavigationEnd } from "@angular/router";

import { GoogleAnalyticsService } from "./shared/";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  routes = {
    "/": "Home Page",
    "/home": "Home Page",
    "/about": "About Us",
    "/contact": "Contact Us",
  };

  constructor(
    public router: Router,
    private googleAnalyticsService: GoogleAnalyticsService,
    private titleService: Title
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.titleService.setTitle(this.routes[event.url]);

        this.googleAnalyticsService.emitPageEvent(event);
      }
    });
  }
}
