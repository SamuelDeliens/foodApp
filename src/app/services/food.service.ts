import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiKey = '5b0d8c475fmsh85217c2c3c6fc2ap1093a0jsn947a9ec4d69b';
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

  searchCategorizedFoods(query : string): Observable<any>{
    const apiUri = this.apiUrl + "/recipes/list"

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
      "x-rapidapi-ua": this.apiUa
    });
    const params = new HttpParams()
    .set("from", "0")
    .set('tags', query)
    .set('size', 24);

    return this.http.get(apiUri, { headers, params });
  }


  searchRecipes(query: string, tags: string = "", from: string = "0"): Observable<any> {
    //const apiUri = this.apiUrl + "/recipes/list"
    const apiUri = this.apiUrl + "/recipes/list"

    const headers = new HttpHeaders({
      "x-rapidapi-host": this.apiHost,
      "x-rapidapi-key": this.apiKey,
      "x-rapidapi-ua": this.apiUa,
    });

    const params = new HttpParams()
        .set("from", from)
        .set("size", "24")
        .set("tags", tags)
        .set("q", query)


    return this.http.get('assets/data/recipeFood.json');
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
      "x-rapidapi-host": this.apiHost,
      "x-rapidapi-key": this.apiKey,
      "x-rapidapi-ua": this.apiUa,
    });

    const params = new HttpParams()
        .set("id", id)

    //return this.http.get(apiUri, { headers, params });
    return this.http.get('assets/data/detailFood2.json');
  }


  getTags(): Observable<any> {
    return this.http.get("assets/data/tagsFood.json");
  }

}
