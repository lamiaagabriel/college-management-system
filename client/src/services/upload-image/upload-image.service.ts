import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadImageService {
  constructor(private _http: HttpClient) {}

  uploadImage(val: any): Observable<any> {
    let data = val;

    return this._http.post(
      'https://api.cloudinary.com/v1_1/dnbruhgqr/image/upload',
      data
    );
  }
}
