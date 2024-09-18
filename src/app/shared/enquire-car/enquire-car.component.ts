import { Component, OnInit } from '@angular/core';
import {
  NgbActiveModal,
  NgbCalendar,
  NgbDateStruct,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-enquire-car',
  templateUrl: './enquire-car.component.html',
  styleUrls: ['./enquire-car.component.scss'],
})
export class EnquireCarComponent implements OnInit {
  selectedEnquiry: string = 'Test Drive'; // Default selection
  selectedContact: string = 'No Preference'; // Default selection

  model!: NgbDateStruct;
  date!: { year: number; month: number };

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
    private calendar: NgbCalendar
  ) {}
  ngOnInit(): void {}

  selectToday() {
    this.model = this.calendar.getToday();
  }

  // To Do back to main route when close modal
  backToMainRoute() {
    this.modal.close();
  }
}
