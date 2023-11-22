import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private apiKey = '5b0d8c475fmsh85217c2c3c6fc2ap1093a0jsn947a9ec4d69b';
  private apiUrl = 'https://tasty.p.rapidapi.com';
  private apiHost = "tasty.p.rapidapi.com";
  private apiUa = "RapidAPI-Playground";

  constructor(private http: HttpClient) { }

  searchFeeds(query: string): Observable<any> {
    //const apiUri = this.apiUrl + "/recipes/list"
    const apiUri = this.apiUrl + "/feeds/list"
    console.log(apiUri);

    const headers = new HttpHeaders({
      "x-rapidapi-host": this.apiHost,
      "x-rapidapi-key": this.apiKey,
      "x-rapidapi-ua": this.apiUa,
    });

    const params = new HttpParams()
        .set("from", "0")
        .set("size", "15")
      

    return this.http.get<any>(apiUri, { headers, params });
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
 
}
