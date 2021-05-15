/* Importaciones */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';


/* Inyecciones */
@Injectable({
	providedIn: 'root'
})

/* Clase */
export class CountryService {

	private apiUrl		: string	= 'https://restcountries.eu/rest/v2';

	get httpParams()	: HttpParams {
		return new HttpParams()
		.set('fields', 'name;capital;alpha2Code;flag;population');
	}

	constructor( private http: HttpClient ) { }

	searchCountry( argument: string )		: Observable<Country[]> {
		const url	= `${ this.apiUrl }/name/${ argument }`;
		return this.http.get<Country[]>( url, { params: this.httpParams } );
	}

	searchCapital( argument: string )		: Observable<Country[]> {
		const url	= `${ this.apiUrl }/capital/${ argument }`;
		return this.http.get<Country[]>( url, { params: this.httpParams } );
	}

	searchCountrybyCode( argument: string )	: Observable<Country> {
		const url	= `${ this.apiUrl }/alpha/${ argument }`;
		return this.http.get<Country>( url );
	}

	searchRegion( argument: string )		: Observable<Country[]> {
		const params	= new HttpParams()
		.set('fields', 'name;capital;alpha2code;flag;population');
		const url		= `${ this.apiUrl }/region/${ argument }`;
		return this.http.get<Country[]>( url, { params: this.httpParams } ).pipe(
			tap( console.log )
		);
	}

}
