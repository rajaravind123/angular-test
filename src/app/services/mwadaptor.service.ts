import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MwadaptorService {
   ROOT_API: string;
   apiName: any;
  constructor(private http: HttpClient) { }

  get(apiName: string): Observable<any> {
    const url = `${apiName}`;
    const result = this.http.get(url, {responseType: 'text'});
    return result;
  }

 
}
