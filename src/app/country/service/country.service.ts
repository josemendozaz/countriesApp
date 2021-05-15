/* Importaciones */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';


/* Inyecciones */
@Injectable({
	providedIn: 'root'
})

/* Clase */
export class CountryService {

	private apiUrl: string	= 'https://restcountries.eu/rest/v2';

	constructor( private http: HttpClient ) { }

	searchCountry( argument: string )		: Observable<Country[]> {
		const url	= `${ this.apiUrl }/name/${ argument }`;
		return this.http.get<Country[]>( url );
	}

	searchCapital( argument: string )		: Observable<Country[]> {
		const url	= `${ this.apiUrl }/capital/${ argument }`;
		return this.http.get<Country[]>( url );
	}

	searchCountrybyCode( argument: string )	: Observable<Country> {
		const url	= `${ this.apiUrl }/alpha/${ argument }`;
		return this.http.get<Country>( url );
	}

}
