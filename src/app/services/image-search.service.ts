import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageSearchService {
  private apiKey = '70f273371d571c5fb022c9d8f15970db';
  private apiUrl = 'http://api.flickr.com/services/rest/';

  constructor(private http: HttpClient) { }

  searchImages(query: string): Observable<any> {
    let url = this.apiUrl +
        "?method=flickr.photos.search&api_key=" + this.apiKey +
        "&text=" + query + "&tags=ingredient&group_id=" +
        "&per_page=1&format=json&jsoncallback=JSONP_CALLBACK";

    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }
}
