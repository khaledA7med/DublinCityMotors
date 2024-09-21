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

  @ViewChild('animatedSection', { static: true }) animatedSection!: ElementRef;

  showNavigationArrows = false;
  showNavigationIndicators = false;

  images = [
    '../../../assets/images/539154.jpg',
    '../../../assets/images/jaguar-car-0h4vhh2g85m0elx1.jpg',
    '../../../assets/images/shiny-hot-red-jaguar-car-6ato97yhe2zlhqi4.jpg',
  ];

  cars = [{ name: 'Audi' }, { name: 'BMW' }, { name: 'Mercedes' }];
  models = [{ name: 'A4' }, { name: 'X5' }, { name: 'C-Class' }];
  years = [{ name: '2020' }, { name: '2021' }, { name: '2022' }];

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
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
}
