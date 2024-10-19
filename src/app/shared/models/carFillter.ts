import { FormControl } from '@angular/forms';

export interface Filter {
  make: FormControl<string | null>;
  model: FormControl<string | null>;
  regYear: FormControl<number | null>;
}

export interface FilterData {
  make: string;
  model: string;
  regYear: number;
}
