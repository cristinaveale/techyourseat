import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  sponsors = [
    {
      name: "Eliassen Group",
      url: "https://www.eliassen.com/",
      img: "../../assets/images/2019-sponsor-logos/eliassen-logo.png"
    },
    {
      name: "Google Developer Groups",
      url: "https://developers.google.com/community/gdg/",
      img: "../../assets/images/2019-sponsor-logos/gdg-logo.png"
    },
    {
      name: "MATRIX",
      url: "https://www.matrixres.com/",
      img: "../../assets/images/2019-sponsor-logos/matrix-logo.png"
    },
    {
      name: "Microsoft",
      url: "https://www.microsoft.com/en-us/",
      img: "../../assets/images/2018-sponsor-logos/microsoft-logo.png"
    },
    {
      name: "Red Ventures",
      url: "https://www.redventures.com/",
      img: "../../assets/images/2019-sponsor-logos/rv-logo.png"
    },
    {
      name: "Slalom",
      url: "https://www.slalom.com/locations/charlotte",
      img: "../../assets/images/2019-sponsor-logos/slalom-logo.png"
    },
    {
      name: "Slalom_Build",
      url: "https://www.slalombuild.com/",
      img: "../../assets/images/2019-sponsor-logos/slalombuildlogo.jpeg"
    },
    {
      name: "Skookum Digital Works",
      url: "https://www.skookum.com/",
      img: "../../assets/images/2019-sponsor-logos/skookum-logo.png"
    },
    {
      name: "WISE",
      url: "https://cltatc.org/wise/",
      img: "../../assets/images/2019-sponsor-logos/wise-logo.png"
    },
    {
      name: "Women Techmakers",
      url: "https://www.womentechmakers.com/",
      img: "../../assets/images/2019-sponsor-logos/wt-logo.png"
    }
  ];

  data = [];
  data2 = [
    {
      id: 0,
      url: "../../assets/images/2018/1.jpg"
    },
    {
      id: 2,
      url: "../../assets/images/2018/2.jpg"
    },
    {
      id: 3,
      url: "../../assets/images/2018/3.jpg"
    },
    {
      id: 4,
      url: "../../assets/images/2018/4.jpg"
    },
    {
      id: 5,
      url: "../../assets/images/2018/5.jpg"
    },
    {
      id: 6,
      url: "../../assets/images/2018/6.jpg"
    },
    {
      id: 7,
      url: "../../assets/images/2018/7.jpg"
    },
    {
      id: 8,
      url: "../../assets/images/2018/8.jpg"
    },
    {
      id: 9,
      url: "../../assets/images/2018/9.jpg"
    },
    {
      id: 10,
      url: "../../assets/images/2018/10.jpg"
    },
    {
      id: 11,
      url: "../../assets/images/2018/11.jpg"
    },
    {
      id: 12,
      url: "../../assets/images/2018/14.jpg"
    },
    {
      id: 15,
      url: "../../assets/images/2018/15.jpg"
    },
    {
      id: 16,
      url: "../../assets/images/2018/16.jpg"
    },
    {
      id: 17,
      url: "../../assets/images/2018/17.jpg"
    },
    {
      id: 18,
      url: "../../assets/images/2018/18.jpg"
    },
    {
      id: 19,
      url: "../../assets/images/2018/19.jpg"
    },
    {
      id: 1,
      url: "../../assets/images/2018/good-road-ciderworks.png"
    },
    {
      id: 14,
      url: "../../assets/images/2018/12.jpg"
    }
  ];

  page = 0;
  size = 4;

  ngOnInit() {
    this.getData({ pageIndex: this.page, pageSize: this.size });
  }

  getData(obj) {
    let index = 0,
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.data = this.data2.filter(() => {
      index++;
      return index > startingIndex && index <= endingIndex ? true : false;
    });
  }
}
