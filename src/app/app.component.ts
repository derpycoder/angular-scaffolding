import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { Router, NavigationEnd } from "@angular/router";

import { GoogleAnalyticsService } from "./shared/";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  routes = {
    "/": {
      title: "Home Page",
      desc: "This is the description of Home Page"
    },
    "/home": {
      title: "Home Page",
      desc: "This is the description of Home Page"
    },
    "/about": {
      title: "About Us",
      desc: "This page will describe some things about us"
    },
    "/contact": {
      title: "Contact Us",
      desc: "This page will tell you how to contact us"
    }
  };

  constructor(
    public router: Router,
    private googleAnalyticsService: GoogleAnalyticsService,
    private titleService: Title,
    private meta: Meta
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.handleSEO(event);

        this.googleAnalyticsService.emitPageEvent(event);
      }
    });
  }

  handleSEO(event: NavigationEnd) {
    const desc = this.routes[event.url].desc;

    // Generic
    this.titleService.setTitle(this.routes[event.url].title);
    this.meta.addTag({ name: "description", content: desc });

    // Twitter Metadata
    this.meta.addTag({ name: "twitter:card", content: "summary_large_image" });
    this.meta.addTag({ name: "twitter:site", content: "@AbhijitKarDikha" });
    this.meta.addTag({ name: "twitter:creator", content: "@AbhijitKarDikha" });
    this.meta.addTag({ name: "twitter:title", content: desc });
    this.meta.addTag({ name: "twitter:description", content: desc });
    this.meta.addTag({ name: "twitter:text:description", content: desc });
    this.meta.addTag({ name: "twitter:image", content: "https://www.abhijit-kar.com/assets/meta/screenshot.png" });
  }
}
