import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private _http: HttpClient) { }

  getCountryList(): Observable<any>{
    return this._http.get<any>('http://localhost:8080/rest/v2/country/all')
  }
  addCountry(): Observable<any>{
    return this._http.get<any>('http://localhost:8080/rest/v2/country/add')
  }
  deleteCountry(): Observable<any>{
    return this._http.get<any>('http://localhost:8080/rest/v2/country/delete')
  }
  updateCountry(): Observable<any>{
    return this._http.get<any>('http://localhost:8080/rest/v2/country/update')
  }
}
