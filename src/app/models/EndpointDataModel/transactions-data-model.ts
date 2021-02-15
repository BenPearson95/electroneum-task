import { TopUpDataModel } from "./top-up-data-model";

export class TransactionsDataModel {
  public ID: string;
  public DestinationAmount: number;
  public DestinationWallet: string;
  public SourceWalletAddress: string;
  public PaymentID: string;
  public Fee: number;
  public TxKey: string;
  public TxHash: string;
  public PaymentType: number;
  public Status: number;
  public DateCreated: Date;
  public TopUpInfo?: TopUpDataModel;
}