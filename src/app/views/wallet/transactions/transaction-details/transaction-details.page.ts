import { TransactionsDataModel } from 'src/app/models/EndpointDataModel/transactions-data-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.page.html',
  styleUrls: ['./transaction-details.page.scss'],
})
export class TransactionDetailsPage implements OnInit {

  transaction: TransactionsDataModel;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    // Get the ID of the transaction from the queryParams, then find
    // the relevant transaction in the route data.
    this.route.queryParams.subscribe(queryParamResult => {
      this.route.data.subscribe(result => {
            this.transaction = result.endpointData.transactions
              .find(t => t.id === queryParamResult.transactionID);
      });
    });
  }

  closeClicked() {
    this.location.back();
  }

}
