import { WalletDataModel } from './EndpointDataModel/wallet-data-model';
import { PayWithETNModel } from "./EndpointDataModel/pay-with-etn-model";
import { TransactionsDataModel } from "./EndpointDataModel/transactions-data-model";

// I have no idea what to call this collection of data. Sorry! :(
export class EndpointDataModel {
  public wallet: WalletDataModel;
  public transactions: Array<TransactionsDataModel>;
  public pay_with_etn: PayWithETNModel;

  constructor(init: any) {
    this.wallet = init.WalletData;
    this.transactions = init.TransactionsDataModel;
    this.pay_with_etn = init.PayWithETNModel;
  }
}