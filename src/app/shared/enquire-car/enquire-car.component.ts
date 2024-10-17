import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  NgbActiveModal,
  NgbCalendar,
  NgbDateStruct,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import AppUtils from '../models/util';
import { CarEnquiry } from '../models/carEquiry';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-enquire-car',
  templateUrl: './enquire-car.component.html',
  styleUrls: ['./enquire-car.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EnquireCarComponent implements OnInit {
  selectedEnquiry: string = 'Test Drive'; // Default selection
  selectedContact: string = 'No Preference'; // Default selection

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

  cars = [{ name: 'Audi' }, { name: 'BMW' }, { name: 'Mercedes' }];

  models = [{ name: 'A4' }, { name: 'X5' }, { name: 'C-Class' }];

  years = [{ name: '2020' }, { name: '2021' }, { name: '2022' }];

  constructor(
    private modalService: NgbModal,
    public modal: NgbActiveModal,
    private calendar: NgbCalendar,
    private appUtils: AppUtils,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {
    this.initForm();
  }

  setDate(e: any) {
    this.f.pickDate?.patchValue(this.appUtils.dateFormater(e.gon) as any);
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  // To Do back to main route when close modal
  backToMainRoute() {
    this.modal.close();
  }

  initForm() {
    this.formGroup = new FormGroup<CarEnquiry>({
      natureEnquiry: new FormControl('Test Drive'), // Default value
      contactBy: new FormControl('No Preference'), // Default value
      firstName: new FormControl(''),
      surName: new FormControl(''),
      contactNumber: new FormControl(''),
      email: new FormControl(''),
      carMake: new FormControl(''),
      carModel: new FormControl(''),
      carYear: new FormControl(''),
      pickDate: new FormControl(null),
      pickTime: new FormControl(''),
      enquiry: new FormControl(''),
    });
  }

  get f() {
    return this.formGroup.controls;
  }

  changeTest(e: any) {
    console.log(e);
  }
  changeTest1(e: any) {
    console.log(e);
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    this.spinner.show();

    console.log(form.value);

    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}
