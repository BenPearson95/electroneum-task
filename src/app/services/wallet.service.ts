import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EndpointDataModel } from '../models/endpoint-data-model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

constructor(
  private http: HttpClient,
) { }

  getWalletData(): Observable<EndpointDataModel> {
    return this.http
    .get(`https://7f9065f949ced63703b704d9dd14f7a8.m.pipedream.net/`)
    .pipe(map((response: EndpointDataModel) => {
      return response;
    }))
  }

}
