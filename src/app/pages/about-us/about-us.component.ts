import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  showNavigationArrows = true;
  showNavigationIndicators = false;
  // images = [1055, 194, 368].map(
  //   (n) => `https://picsum.photos/id/${n}/1903/950`
  // );

  images = [
    '../../../assets/images/539154.jpg',
    '../../../assets/images/jaguar-car-0h4vhh2g85m0elx1.jpg',
    '../../../assets/images/shiny-hot-red-jaguar-car-6ato97yhe2zlhqi4.jpg',
  ];
}