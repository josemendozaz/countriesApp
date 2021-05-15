/* Importaciones */
import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

/* Componente */
@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css']
})

/* Clase */
export class CountriesTableComponent {
	@Input() countriesForTable: Country[]	= [];
}
