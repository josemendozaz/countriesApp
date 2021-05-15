/* Importaciones */
import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../service/country.service';

/* Componente */
@Component({
	selector	: 'app-by-country',
	templateUrl	: './by-country.component.html',
	styleUrls	: ['./by-country.component.css']
})

/* Clase */
export class ByCountryComponent {

	argument			: string	= 'Hello There';
	isError				: boolean	= false;
	countries			: Country[]	= [];
	suggestedCountries	: Country[]	= [];
	showSuggestion		: boolean	= false;




	constructor( private countryService: CountryService ) { }

	searchCountry( argument: string )	: void {

		this.isError	= false;
		this.argument	= argument;

		if ( this.argument.trim().length === 0 ) { return; }

		this.countryService.searchCountry( this.argument )
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

		this.isError		= false;
		this.argument		= argument;
		this.showSuggestion	= true;
		console.log('object');
		this.countryService.searchCountry( argument )
		.subscribe(
			countries => this.suggestedCountries = countries.splice(0, 5),
		 	(error) => {
				this.countries		= [];
				this.showSuggestion	= false;
			}
		);

	}

	searchSuggested( argument: string )		: void {
		this.searchCountry( argument );
		this.showSuggestion	= false;
	}


	closeSuggestion()						: void {
		this.showSuggestion = false;
	}

}
