import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private apiKey = '5b0d8c475fmsh85217c2c3c6fc2ap1093a0jsn947a9ec4d69b'
  private apiUrl = 'https://the-cocktail-db.p.rapidapi.com'
  private apiHost = "the-cocktail-db.p.rapidapi.com"
  private apiUa = "RapidAPI-Playground"
  constructor(private http: HttpClient) { }

  searchName(query: string): Observable<any> {
    const apiUri = this.apiUrl + "/search.php"
    console.log(apiUri);


    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
      "x-rapidapi-ua": this.apiUa,

    });

    const params = new HttpParams()
        .set("s", query);

    //TODO replace this for final version => avoid api use
    //return this.http.get('assets/data/recipeCocktail.json');
    return this.http.get(apiUri, { headers, params });
  }
//Cocktails etrieving methods
  searchPopularCocktails(): Observable<any>{
    const apiUri = this.apiUrl + "/popular.php"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
      "x-rapidapi-ua": this.apiUa
    });
    const params = new HttpParams();

    return this.http.get(apiUri, { headers, params });
  }

  fetchCocktailDetailsById(id : string): Observable<any>{
    const apiUri = this.apiUrl + "/lookup.php"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
      "x-rapidapi-ua": this.apiUa
    });
    const params = new HttpParams()
        .set("i", id);
    return this.http.get(apiUri, { headers, params });
  }
//food ones
  searchIngredient(query: string): Observable<any> {
    const apiUri = this.apiUrl + "/filter.php"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
      "x-rapidapi-ua": this.apiUa
    });

    const params = new HttpParams()
        .set("i", query);

    return this.http.get(apiUri, { headers, params });
  }

  searchIngredientName(query: string): Observable<any> {
    const apiUri = this.apiUrl + "/search.php"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
      "x-rapidapi-ua": this.apiUa
    });

    const params = new HttpParams()
        .set("i", query);

    return this.http.get(apiUri, { headers, params });
  }

  filterByCategory(query: string): Observable<any> {
    const apiUri = this.apiUrl + "/filter.php"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
      "x-rapidapi-ua": this.apiUa
    });

    const params = new HttpParams()
        .set("c", query);

    return this.http.get(apiUri, { headers, params });
  }

  filterByAlcoholic(query: string): Observable<any> {
    const apiUri = this.apiUrl + "/filter.php"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
      "x-rapidapi-ua": this.apiUa
    });

    const params = new HttpParams()
        .set("a", query);

    return this.http.get(apiUri, { headers, params });
  }

  filterByGlass(query: string): Observable<any> {
    const apiUri = this.apiUrl + "/filter.php"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
      "x-rapidapi-ua": this.apiUa
    });

    const params = new HttpParams()
        .set("g", query);

    return this.http.get(apiUri, { headers, params });
  }

  filterByMultiIngredient(query: string): Observable<any> {
    const apiUri = this.apiUrl + "/filter.php"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
      "x-rapidapi-ua": this.apiUa
    });

    const params = new HttpParams()
        .set("i", query);

    return this.http.get(apiUri, { headers, params });
  }

}
