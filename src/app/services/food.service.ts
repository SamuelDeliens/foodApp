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
    const apiUri = this.apiUrl + "/recipes/list"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiUrl
    });

    return this.http.get(apiUri, { headers });
  }

  searchRecipes(query: string, tags: string = "", from: string = "0", size: string = "20"): Observable<any> {
    const apiUri = this.apiUrl + "/recipes/list"

    const headers = new HttpHeaders({
      "x-rapidapi-host": this.apiHost,
      "x-rapidapi-key": this.apiKey,
      "x-rapidapi-ua": this.apiUa,
    });

    const params = new HttpParams()
        .set("from", from)
        .set("size", size)
        .set("tags", tags)
        .set("q", query)

    return this.http.get(apiUri, { headers, params });
  }

  searchSimilarRecipes(id: number): Observable<any> {
    const apiUri = this.apiUrl + "/recipes/list-similarities"

    const headers = new HttpHeaders({
      "x-rapidapi-host": this.apiHost,
      "x-rapidapi-key": this.apiKey,
      "x-rapidapi-ua": this.apiUa
    });

    const params = new HttpParams()
        .set("recipe_id", id)

    return this.http.get(apiUri, { headers, params });
  }

  searchDetails(id: number): Observable<any> {
    const apiUri = this.apiUrl + "/recipes/get-more-info"

    const headers = new HttpHeaders({
      "x-rapidapi-host": this.apiHost,
      "x-rapidapi-key": this.apiKey,
      "x-rapidapi-ua": this.apiUa
    });

    const params = new HttpParams()
        .set("id", id)

    return this.http.get(apiUri, { headers, params });
  }

  feedList(): Observable<any> {
    const apiUri = this.apiUrl + "/feeds/list"

    const headers = new HttpHeaders({
      "x-rapidapi-host": this.apiHost,
      "x-rapidapi-key": this.apiKey,
      "x-rapidapi-ua": this.apiUa,
    });

    const params = new HttpParams()
        .set("from", "0")
        .set("size", "10")
        .set("timezone", "+0200")
        .set("vegetarian", "false")


    return this.http.get(apiUri, { headers, params });
  }

  getTags(): Observable<any> {
    return this.http.get("assets/data/tagsFood.json");
  }

}
