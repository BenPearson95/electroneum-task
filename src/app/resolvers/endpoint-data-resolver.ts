import { WalletService } from './../services/wallet.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { EndpointDataModel } from '../models/endpoint-data-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EndpointDataResolver implements Resolve<any> {
  
  constructor(
    private walletService: WalletService,
  ) { }

  resolve(): Observable<EndpointDataModel> {
    return this.walletService.getWalletData();
  }
}