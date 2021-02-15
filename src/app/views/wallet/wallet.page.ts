import { PayWithETNModel } from '../../models/EndpointDataModel/pay-with-etn-model';
import { TransactionsDataModel } from '../../models/EndpointDataModel/transactions-data-model';
import { WalletDataModel } from '../../models/EndpointDataModel/wallet-data-model';
import { Component } from '@angular/core';
import { EndpointDataModel } from '../../models/endpoint-data-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: 'wallet.page.html',
  styleUrls: ['wallet.page.scss']
})
export class WalletPage {

  // Create vars the component can reference in this file & the html.
  walletData: WalletDataModel;
  transactionsData: Array<TransactionsDataModel>;
  sortedTransactionsData: Array<TransactionsDataModel> = [];
  payWithETNData: PayWithETNModel;
  

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    // A resolver is being used, so we need to get the data from the route.
    this.route.data.subscribe(result => {
      this.populateDataObjects(result.endpointData);
    })
  }

  // When we have the data, we need to separate it out into their 
  // correct objects/arrays
  populateDataObjects(endpointData: EndpointDataModel) {
    this.walletData = endpointData.wallet;
    this.transactionsData = endpointData.transactions;
    this.payWithETNData = endpointData.pay_with_etn;

    this.getLatestTransactions();
  }

  // A function that grabs the two latest transactions.
  getLatestTransactions() {
    const sortedTransactions = this.transactionsData.sort((a, b) => {
      return <any>new Date(b.dateCreated) - <any>new Date (a.dateCreated);
    });

    this.sortedTransactionsData = [
      sortedTransactions[0],
      sortedTransactions[1],
    ];
  }

}
