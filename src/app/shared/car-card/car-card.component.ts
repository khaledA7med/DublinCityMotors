import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
  @Output() car = new EventEmitter<string>();
  cars = [
    {
      image : '../../../assets/images/stock/1.jpg',
      title: "Audi Q2 35 TFSI S-T S-Line",
      price: "€33,900",
      info:{
        yearName:"Reg Year",
        yearVal:2021,
        MileageName:"Mileage",
        MileageVal:7115,
        FuelTypeName:"Fuel Type",
        FuelTypeVal:2021,
        TransmissionName:"Transmission",
        TransmissionVal:"Automatic",
      },
    },
    {
      image : '../../../assets/images/stock/2.jpg',
      title: "Audi Q2 35 TFSI S-T S-Line",
      price: "€33,900",
      info:{
        yearName:"Reg Year",
        yearVal:2021,
        MileageName:"Mileage",
        MileageVal:7115,
        FuelTypeName:"Fuel Type",
        FuelTypeVal:2021,
        TransmissionName:"Transmission",
        TransmissionVal:"Automatic",
      },
    },
    {
      image : '../../../assets/images/stock/3.jpg',
      title: "Audi Q2 35 TFSI S-T S-Line",
      price: "€33,900",
      info:{
        yearName:"Reg Year",
        yearVal:2021,
        MileageName:"Mileage",
        MileageVal:7115,
        FuelTypeName:"Fuel Type",
        FuelTypeVal:2021,
        TransmissionName:"Transmission",
        TransmissionVal:"Automatic",
      },
    },
    {
      image : '../../../assets/images/stock/4.jpg',
      title: "Audi Q2 35 TFSI S-T S-Line",
      price: "€33,900",
      info:{
        yearName:"Reg Year",
        yearVal:2021,
        MileageName:"Mileage",
        MileageVal:7115,
        FuelTypeName:"Fuel Type",
        FuelTypeVal:2021,
        TransmissionName:"Transmission",
        TransmissionVal:"Automatic",
      },
    },
  ]
  constructor(private sharedService: SharedService , private router: Router){}
  ngOnInit(): void {
      
  }

  getCar(index:any){
    this.sharedService.sendCarData(index)
    this.router.navigate(['/product'])
  }
}
