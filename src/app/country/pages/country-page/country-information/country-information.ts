import { Component, computed, input } from '@angular/core';
import type { Country } from '../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.html',
})
export class CountryInformation {

  country = input.required<Country>();
  currentYear = computed(() => {
    return new Date().getFullYear();
  });
}
