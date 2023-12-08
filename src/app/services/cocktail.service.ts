import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private apiKey = '5b0d8c475fmsh85217c2c3c6fc2ap1093a0jsn947a9ec4d69b';
  private apiUrl = 'https://the-cocktail-db.p.rapidapi.com'
  private apiHost = "the-cocktail-db.p.rapidapi.com"
  private apiUa = "RapidAPI-Playground"
  constructor(private http: HttpClient) {
  }

  searchName(query: string): Observable<any> {
    const apiUri = this.apiUrl + "/search.php"
    console.log(apiUri);


    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
      "X-RapidApi-Ua": this.apiUa,
    });

    const params = new HttpParams()
        .set("s", query);


    return this.http.get(apiUri, { headers, params });
  }

  searchLatestCocktails(): Observable<any>{
    const apiUri = this.apiUrl + "/latest.php"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
      "x-rapidapi-ua": this.apiUa
    });
    const params = new HttpParams();

    return this.http.get(apiUri, { headers, params });
  }

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

  filter(alcoholic: string, category: string, glass: string, ingredient: string): Observable<any> {
    const apiUri = this.apiUrl + "/filter.php"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
      "X-RapidApi-Ua": this.apiUa,
    });

    let params = new HttpParams()
    if (alcoholic != "") params = params.set("a", alcoholic)
    if (category != "") params = params.set("c", category)
    if (glass != "") params = params.set("g", glass)
    if (ingredient != "") params = params.set("i", ingredient)

    return this.http.get(apiUri, { headers, params });
  }

  searchDetails(id: number): Observable<any> {
    const apiUri = this.apiUrl + "/lookup.php"

    const headers = new HttpHeaders({
      "x-rapidapi-host": this.apiHost,
      "x-rapidapi-key": this.apiKey,
      "X-RapidApi-Ua": this.apiUa,
    });

    const params = new HttpParams()
        .set("i", id)

    return this.http.get(apiUri, { headers, params });
  }

  getTags(): Observable<any> {
    return this.http.get("assets/data/tagsCocktail.json");
  }

}
