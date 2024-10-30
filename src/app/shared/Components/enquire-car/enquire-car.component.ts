import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  NgbActiveModal,
  NgbCalendar,
  NgbDateStruct,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import AppUtils from '../../models/util';
import { CarEnquiry } from '../../models/carEquiry';
import { NgxSpinnerService } from 'ngx-spinner';
import { CarsService } from '../../services/pagesServices/cars.service';
import { MessagesService } from '../../services/messages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-enquire-car',
  templateUrl: './enquire-car.component.html',
  styleUrls: ['./enquire-car.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EnquireCarComponent implements OnInit {
  selectedEnquiry: string = 'Test Drive'; // Default selection
  selectedContact: string = 'No Preference'; // Default selection
  selectedValue!: string;

  subscription: Subscription[] = [];

  @Input() carEnquiry: any;

  model!: NgbDateStruct;
  date!: { year: number; month: number };

  formGroup!: FormGroup<CarEnquiry>;
  submitted: boolean = false;

  time = [
    { id: 0, name: '10:00 AM' },
    { id: 1, name: '11:00 AM' },
    { id: 2, name: '12:00 AM' },
    { id: 3, name: '01:00 PM' },
    { id: 4, name: '02:00 PM' },
    { id: 5, name: '03:00 PM' },
    { id: 6, name: '04:00 PM' },
    { id: 7, name: '05:00 PM' },
    { id: 8, name: '06:00 PM' },
  ];

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

  makes = [];

  models = [];

  constructor(
    private modalService: NgbModal,
    public modal: NgbActiveModal,
    private calendar: NgbCalendar,
    private appUtils: AppUtils,
    private spinner: NgxSpinnerService,
    private carsService: CarsService,
    private messages: MessagesService
  ) {}
  ngOnInit(): void {
    this.initForm();

    if (this.carEnquiry) {
      this.f.carName.patchValue(this.carEnquiry.name);
      this.f.carMake.patchValue(this.carEnquiry.makeName);
      this.f.carModel.patchValue(this.carEnquiry.modelName);
      this.f.carYear.patchValue(this.carEnquiry.regYear);

      this.f.carName.disable();
      this.f.carMake.disable();
      this.f.carModel.disable();
      this.f.carYear.disable();
    }
  }

  setPickDate(e: any) {
    this.f.pickDate?.patchValue(this.appUtils.dateFormater(e.gon) as any);
  }
  setNCTDate(e: any) {
    this.f.nctExpiryDate?.patchValue(this.appUtils.dateFormater(e.gon) as any);
  }
  setTaxDate(e: any) {
    this.f.roadTaxExpiryDate?.patchValue(
      this.appUtils.dateFormater(e.gon) as any
    );
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  // To Do back to main route when close modal
  backToMainRoute() {
    this.modal.close();
  }

  initForm() {
    this.getMake();
    this.formGroup = new FormGroup<CarEnquiry>({
      natureOfEnquiry: new FormControl('Test Drive'), // Default value
      contactMeBy: new FormControl('No Preference'), // Default value
      firstName: new FormControl(''),
      surName: new FormControl(''),
      contactNumber: new FormControl(''),
      emailAddress: new FormControl(''),
      carName: new FormControl(''),
      carMake: new FormControl(''),
      carModel: new FormControl(''),
      carYear: new FormControl(),
      pickDate: new FormControl(null),
      pickTime: new FormControl(''),
      yourEnquiry: new FormControl(''),
      tradeInDetails: new FormControl(''),
      carRegNo: new FormControl(),
      currentMileage: new FormControl(),
      nctExpiryDate: new FormControl(null),
      roadTaxExpiryDate: new FormControl(null),
      condition: new FormControl(''),
      priceExpectation: new FormControl(),
    });
  }

  get f() {
    return this.formGroup.controls;
  }

  getValue(e: any) {
    this.selectedValue = e.target.value;
  }
  getMake() {
    let sub = this.carsService.getCarMake().subscribe((res) => {
      this.makes = res;
    });
    this.subscription.push(sub);
  }
  getModel(id: number) {
    let sub = this.carsService.getCarModel(id).subscribe((res) => {
      this.models = res;
    });
    this.subscription.push(sub);
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    this.spinner.show();

    let data = form.getRawValue();

    let sub = this.carsService.enquireCar(data).subscribe({
      next: (res) => {
        if (res.success === true) {
          this.spinner.hide();
          this.messages.toast('Car Enquiry Sent Successfullt', 'success');
          this.submitted = false;
          this.modal.close();
        } else {
          this.spinner.hide();
          this.messages.popup('error', 'error in Equiry', 'error');
        }
      },
      error: () => {
        this.spinner.hide();
        this.messages.popup('error', 'error in Equiry', 'error');
      },
    });

    this.subscription.push(sub);
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.forEach((s) => s.unsubscribe());
  }
}
