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
}
