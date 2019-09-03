import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MwadaptorService } from './mwadaptor.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private mwService: MwadaptorService) { }

 
  /* function for getting product and subproduct list*/
  getProduct(): Observable<any[]> {
    return this.mwService.get('https://api.nal.usda.gov/ndb/reports/?ndbno=01009&type=f&format=json&api_key=DEMO_KEY');
  } 

  

  
}
