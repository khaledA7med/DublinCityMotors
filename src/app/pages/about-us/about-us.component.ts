import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate(
          '1500ms ease-out',
          style({ transform: 'scale(1)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate('1500ms ease-in', style({ transform: 'scale(0)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class AboutUsComponent implements OnInit {
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

  constructor(private spinner: NgxSpinnerService) {}
  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }
}
