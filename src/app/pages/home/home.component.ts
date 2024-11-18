import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationEvent,
} from '@angular/animations';
import { FilterService } from 'src/app/shared/services/filter.service';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/shared/services/pagesServices/cars.service';
import { MessagesService } from 'src/app/shared/services/messages.service';

interface Offer {
  id?: number;
  active: boolean;
  validFrom: Date;
  validUntil: Date;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('rightSecState', [
      state('out', style({ transform: 'translateX(100%)' })), // Off-screen to the right
      state('in', style({ transform: 'translateX(0)' })), // In place, on-screen
      transition('out => in', animate('1s ease-in-out')),
    ]),
    trigger('leftSecState', [
      state('out', style({ transform: 'translateX(-100%)' })), // Off-screen to the left
      state('in', style({ transform: 'translateX(0)' })), // In place, on-screen
      transition('out => in', animate('1s ease-in-out')),
    ]),
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
export class HomeComponent implements OnInit {
  isLoading = false;
  orientation: string = 'out'; // Initial state for both sections
  animationTriggered = false; // Prevent re-triggering the animation

  selectedMake!: string;
  selectedModel!: string;
  selectedYear!: number;
  offersData: Offer[] = [];

  @ViewChild('animatedSection', { static: true }) animatedSection!: ElementRef;

  showNavigationArrows = false;
  showNavigationIndicators = false;

  images = [
    '../../../assets/images/539154.jpg',
    '../../../assets/images/jaguar-car-0h4vhh2g85m0elx1.jpg',
    '../../../assets/images/shiny-hot-red-jaguar-car-6ato97yhe2zlhqi4.jpg',
  ];

  makes = [];
  models = [];
  years = [
    { name: '1990' },
    { name: '1991' },
    { name: '1992' },
    { name: '1993' },
    { name: '1994' },
    { name: '1995' },
    { name: '1996' },
    { name: '1997' },
    { name: '1998' },
    { name: '1999' },
    { name: '2000' },
    { name: '2001' },
    { name: '2002' },
    { name: '2003' },
    { name: '2004' },
    { name: '2005' },
    { name: '2006' },
    { name: '2007' },
    { name: '2008' },
    { name: '2009' },
    { name: '2010' },
    { name: '2011' },
    { name: '2012' },
    { name: '2013' },
    { name: '2014' },
    { name: '2015' },
    { name: '2016' },
    { name: '2017' },
    { name: '2018' },
    { name: '2019' },
    { name: '2020' },
    { name: '2021' },
    { name: '2022' },
    { name: '2023' },
    { name: '2024' },
    { name: '2025' },
    { name: '2026' },
    { name: '2027' },
    { name: '2028' },
    { name: '2029' },
    { name: '2030' },
    { name: '2031' },
    { name: '2032' },
    { name: '2033' },
    { name: '2034' },
    { name: '2035' },
    { name: '2036' },
    { name: '2037' },
    { name: '2038' },
    { name: '2039' },
    { name: '2040' },
    { name: '2041' },
    { name: '2042' },
    { name: '2043' },
    { name: '2044' },
    { name: '2045' },
    { name: '2046' },
    { name: '2047' },
    { name: '2048' },
    { name: '2049' },
    { name: '2050' },
  ];

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private filterService: FilterService,
    private carsService: CarsService,
    private messages: MessagesService
  ) {}

  ngOnInit(): void {
    this.getMake();
    this.getAllOffers();
    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 3000);
  }

  getMake() {
    this.carsService.getCarMake().subscribe((res) => {
      this.makes = res;
    });
  }

  getModel(id: number) {
    this.carsService.getCarModel(id).subscribe((res) => {
      this.models = res;
    });
  }

  getAllOffers() {
    this.spinner.show();
    return this.carsService.getAllOffers().subscribe(
      (res) => {
        if (res) {
          this.spinner.hide();
          this.offersData = res;
          console.log(this.offersData);
        }
      },
      (error) => {
        this.spinner.hide();
        this.messages.toast(error.error.message, 'error');
      }
    );
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.animationTriggered && this.isSectionInView()) {
      this.orientation = 'in'; // Change state to trigger the animation
      this.animationTriggered = true; // Ensure the animation triggers only once
    }
  }

  // Check if the section is visible in the viewport
  isSectionInView(): boolean {
    const rect = this.animatedSection.nativeElement.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Adjust this logic to trigger the animation slightly before the element is fully in view
    const isVisible = rect.top < windowHeight && rect.bottom >= 0; // Only check vertical visibility

    return isVisible;
  }

  // Debounce the scroll event to avoid performance issues
  private debounce(func: Function, wait: number): (...args: any[]) => void {
    let timeout: any;
    return function (...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  @HostListener('window:scroll', [])
  debouncedScroll = this.debounce(() => this.onScroll(), 100); // Debounce by 100ms
  onAnimationDone(event: AnimationEvent) {
    // You can handle post-animation logic here
  }

  onSearch() {
    // Store the filter data in the service
    this.filterService.setFilterData(
      this.selectedMake,
      this.selectedModel,
      this.selectedYear
    );
    // Navigate to the stock page
    this.router.navigate(['/view-stock']);
  }
}
