import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  constructor(private http: HttpClient) { }
  baseURL = environment.DEV.BASE_URL;
  // function for CRUD
  request(requestType: string, requestURL: string, requestBody: any, city: string): Observable<any> {

    let params = new HttpParams().set('q', city);
    // for get request..
    if (requestType === 'get') {
      return this.http.get<any>(this.baseURL + requestURL, { params: params });
    }


    // for post request(adding)..
    if (requestType === 'post') {
      return this.http.post<any>(this.baseURL + requestURL, requestBody);
    }

    // for put request(updating with all required values)..        
    if (requestType === 'put') {
      return this.http.put<any>(this.baseURL + requestURL, requestBody);
    }

    // for patch request(updating with specific values)..
    if (requestType === 'patch') {
      return this.http.patch<any>(this.baseURL + requestURL, requestBody);
    }

    // for delete request..
    if (requestType === 'delete') {
      return this.http.delete<any>(this.baseURL + requestURL);
    }

  }
}
