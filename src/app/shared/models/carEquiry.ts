import { FormControl } from '@angular/forms';

export interface CarEnquiry {
  natureEnquiry: FormControl<string | null>;
  contactBy: FormControl<string | null>;
  firstName: FormControl<string | null>;
  surName: FormControl<string | null>;
  contactNumber: FormControl<string | null>;
  email: FormControl<string | null>;
  carMake: FormControl<string | null>;
  carModel: FormControl<string | null>;
  carYear: FormControl<string | null>;
  pickDate: FormControl<Date | null>;
  pickTime: FormControl<string | null>;
  enquiry: FormControl<string | null>;
}
