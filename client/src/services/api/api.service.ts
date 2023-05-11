import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  get(url: string) {
    return this._http.get(`http://localhost:3000/api/${url}`);
  }

  post(url: string, ...options: any) {
    return this._http.post(`http://localhost:3000/api/${url}`, options);
  }
}
