import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sponsors",
  templateUrl: "./sponsors.component.html",
  styleUrls: ["./sponsors.component.scss"]
})
export class SponsorsComponent {
  sponsors = [
    {
      img: "../../assets/images/2018-sponsor-logos/captech-logo.png",
      org: "CapTech Consulting",
      url: "https://www.captechconsulting.com/offices/charlotte"
    },
    {
      img: "../../assets/images/2018-sponsor-logos/cardinalsolutions-logo.png",
      org: "Cardinal Solutions",
      url: "https://www.insight.com/en_US/home.html"
    },
    {
      img: "../../assets/images/2018-sponsor-logos/microsoft-logo.png",
      org: "Microsoft",
      url: "https://www.microsoft.com/en-us/"
    },
    {
      img: "../../assets/images/2018-sponsor-logos/wt-logo.png",
      org: "Women Techmakers",
      url: "https://www.womentechmakers.com/"
    }
  ];
}
