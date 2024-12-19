import { FormControl } from '@angular/forms';

export interface CarEnquiry {
  natureOfEnquiry: FormControl<string | null>;
  contactMeBy: FormControl<string | null>;
  firstName: FormControl<string | null>;
  surName: FormControl<string | null>;
  contactNumber: FormControl<string | null>;
  emailAddress: FormControl<string | null>;
  carName: FormControl<string | null>;
  carMake: FormControl<string | null>;
  carModel: FormControl<string | null>;
  carYear: FormControl<number | null>;
  pickDate: FormControl<Date | null>;
  pickTime: FormControl<string | null>;
  yourEnquiry: FormControl<string | null>;
  tradeInDetails: FormControl<string | null>;
  carRegNo: FormControl<number | null>;
  currentMileage: FormControl<number | null>;
  nctExpiryDate: FormControl<Date | null>;
  roadTaxExpiryDate: FormControl<string | null>;
  condition: FormControl<string | null>;
  priceExpectation: FormControl<number | null>;
}
export interface CarEnquiryData {
  natureOfEnquiry: string;
  contactMeBy: string;
  firstName: string;
  surName: string;
  contactNumber: string;
  emailAddress: string;
  carName: string;
  carMake: string;
  carModel: string;
  carYear: number;
  pickDate: Date;
  pickTime: string;
  yourEnquiry: string;
  tradeInDetails: string;
  carRegNo: number;
  currentMileage: number;
  nctExpiryDate: Date;
  roadTaxExpiryDate: string;
  condition: string;
  priceExpectation: number;
}
