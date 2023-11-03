import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiKey = '40419272-09b1b755b85678ab8a6456702';
  private apiUrl = 'https://pixabay.com/api/';

  constructor(private http: HttpClient) {}

  searchImages(query: string): Observable<any> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', query);

    return this.http.get(this.apiUrl, { params });
  }
}
