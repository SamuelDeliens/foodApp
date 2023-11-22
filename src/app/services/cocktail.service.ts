import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private apiKey = '8b4dd2d6e5msh6d6bbfad360372fp15c90cjsn7b9a2b255c39'
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

  searchIngredient(query: string): Observable<any> {
    const apiUri = this.apiUrl + "/filter.php"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiUrl
    });

    const params = new HttpParams()
        .set("i", query);

    return this.http.get(apiUri, { headers, params });
  }

  searchIngredientName(query: string): Observable<any> {
    const apiUri = this.apiUrl + "/search.php"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiUrl
    });

    const params = new HttpParams()
        .set("i", query);

    return this.http.get(apiUri, { headers, params });
  }

  filterByCategory(query: string): Observable<any> {
    const apiUri = this.apiUrl + "/filter.php"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiUrl
    });

    const params = new HttpParams()
        .set("c", query);

    return this.http.get(apiUri, { headers, params });
  }

  filterByAlcoholic(query: string): Observable<any> {
    const apiUri = this.apiUrl + "/filter.php"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiUrl
    });

    const params = new HttpParams()
        .set("a", query);

    return this.http.get(apiUri, { headers, params });
  }

  filterByGlass(query: string): Observable<any> {
    const apiUri = this.apiUrl + "/filter.php"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiUrl
    });

    const params = new HttpParams()
        .set("g", query);

    return this.http.get(apiUri, { headers, params });
  }

  filterByMultiIngredient(query: string): Observable<any> {
    const apiUri = this.apiUrl + "/filter.php"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiUrl
    });

    const params = new HttpParams()
        .set("i", query);

    return this.http.get(apiUri, { headers, params });
  }

}
