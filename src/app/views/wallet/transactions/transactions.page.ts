import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsDataModel } from 'src/app/models/EndpointDataModel/transactions-data-model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  transactionsData: Array<TransactionsDataModel>;

  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Take the specific data we need from the route.
    this.route.data.subscribe(result => {
      this.transactionsData = result.endpointData.transactions;

      this.doubleTransactions(result.endpointData.transactions, 0);

      
    });

    console.log(this.transactionsData);
  }

  // Send the user back a page, to the transactions.
  closeClicked() {
    this.location.back();
  }

  transactionClicked(ID: string) {

  }

  // A function just to create dummy data
  doubleTransactions(transactions: Array<TransactionsDataModel>, amount: number) {
    let counter = 0;
    while (counter < amount) {
      transactions.forEach(transaction => {
        this.transactionsData.push(transaction);
      });
      counter++;
    }
  }

}
