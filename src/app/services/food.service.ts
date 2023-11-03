import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiKey = '7befa77546mshdf2022a200c25d3p1793aejsn0ca0d0c39c91';
  private apiUrl = 'https://tasty.p.rapidapi.com';
  private apiHost = "tasty.p.rapidapi.com";
  private apiUa = "RapidAPI-Playground";

  constructor(private http: HttpClient) { }

  autoComplete(query: string): Observable<any> {
    const apiUri = this.apiUrl + "/recipes/auto-complete"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiUrl
    });

    const params = new HttpParams()
        .set("prefix", query);

    return this.http.get(apiUri, { headers, params });
  }

  searchRecipes(query: string): Observable<any> {
    //const apiUri = this.apiUrl + "/recipes/list"
    const apiUri = this.apiUrl + "/recipes/list"
    console.log(apiUri);

    const headers = new HttpHeaders({
      "x-rapidapi-host": this.apiHost,
      "x-rapidapi-key": this.apiKey,
      "x-rapidapi-ua": this.apiUa,
    });

    const params = new HttpParams()
        .set("from", "0")
        .set("size", "24")
        //.set("tags", "under_30_minutes");
        .set("q", query)

    return this.http.get<any>(apiUri, { headers, params });
  }

  searchSimilarRecipes(id: number): Observable<any> {
    const apiUri = this.apiUrl + "/recipes/list-similarities"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiUrl
    });

    const params = new HttpParams()
        .set("recipe_id", id)

    return this.http.get(apiUri, { headers, params });
  }

  searchDetails(id: number): Observable<any> {
    const apiUri = this.apiUrl + "/recipes/get-more-info"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiUrl
    });

    const params = new HttpParams()
        .set("recipe_id", id)

    return this.http.get(apiUri, { headers, params });
  }

  getTags(): Observable<any> {
    const apiUri = this.apiUrl + "/recipes/get-more-info"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiUrl
    });

    const params = new HttpParams();

    return this.http.get(apiUri, { headers, params });
  }

}
