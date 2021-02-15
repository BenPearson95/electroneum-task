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
    console.log(this.route);
    this.route.queryParams.subscribe(queryParamResult => {
      this.route.data.subscribe(result => {
            this.transaction = result.endpointData.transactions
              .find(t => t.id === queryParamResult.transactionID);
            console.log(this.transaction);
      });
    });
  }

  closeClicked() {
    this.location.back();
  }

}
