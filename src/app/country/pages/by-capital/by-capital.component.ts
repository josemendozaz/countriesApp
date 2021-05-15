/* Importaciones */
import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../service/country.service';

/* Componente */
@Component({
	selector	: 'app-by-capital',
	templateUrl	: './by-capital.component.html',
	styleUrls	: ['./by-capital.component.css']
})

/* Clase */
export class ByCapitalComponent {

	argument	: string	= 'Hello There';
	isError		: boolean	= false;
	countries	: Country[]	= [];

	constructor( private countryService: CountryService ) { }

	searchCountry( argument: string )	: void {

		this.isError	= false;
		this.argument	= argument;

		if ( this.argument.trim().length === 0 ) { return; }

		this.countryService.searchCapital( this.argument )
		.subscribe( (countries) => {
			this.countries	= countries;
			console.log( this.countries );
		}, (error) => {
			console.log('error');
			console.log(error);
			this.isError	= true;
			this.countries	= [];
		});
	}

	suggestion( argument: string )		: void {
		this.isError	= false;
		console.log('object');
		/* TODO: crear sugerencias */
	}

}
