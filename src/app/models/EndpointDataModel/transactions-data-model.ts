import { TopUpDataModel } from "./top-up-data-model";

export class TransactionsDataModel {
  public id: string;
  public destinationAmount: number;
  public destinationWallet: string;
  public sourceWalletAddress: string;
  public paymentID: string;
  public fee: number;
  public txKey: string;
  public txHash: string;
  public paymentType: number;
  public status: number;
  public dateCreated: Date;
  public topUpInfo?: TopUpDataModel;
}