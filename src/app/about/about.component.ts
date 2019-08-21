import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent {
  orgs = [
    {
      id: "1",
      img: "../../assets/images/2019-org-logos/chicktech.png",
      org: "ChickTech Charlotte",
      url: "https://charlotte.chicktech.org/"
    },
    {
      id: "2",
      img: "../../assets/images/2019-org-logos/cwit.png",
      org: "Carolina Women in Tech",
      url: "https://www.carolinawomenintech.org"
    },
    {
      id: "3",
      img: "../../assets/images/2019-org-logos/dottie-rose.png",
      org: "Dottie Rode Foundation",
      url: "https://www.thedotconsulting.co"
    },
    {
      id: "4",
      img: "../../assets/images/2019-org-logos/fleurix.png",
      org: "Fleurix",
      url: "https://www.fleurixconf.com/"
    },
    {
      id: "5",
      img: "../../assets/images/2019-org-logos/heathtech.png",
      org: "Healthtech Women",
      url: "https://www.healthtechwomen.com"
    },
    {
      id: "6",
      img: "../../assets/images/2019-org-logos/queencitybytes.png",
      org: "Queen City Bytes",
      url: "https://www.meetup.com/qc-bytes"
    },
    {
      id: "7",
      img: "../../assets/images/2019-org-logos/wiux.png",
      org: "Women in UX",
      url: "https://www.meetup.com/Women-in-UX-Charlotte/"
    },
    {
      id: "8",
      img: "../../assets/images/2019-org-logos/wogrammer.png",
      org: "Wogrammer",
      url: "https://www.wogrammer.org"
    },
    {
      id: "9",
      img: "../../assets/images/2019-org-logos/wtm.svg",
      org: "Charlotte Women Techmakers",
      url: "https://www.womentechmakers.com/membership"
    }
  ];
}
