import { WalletService } from '../../services/wallet.service';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WalletPage } from './wallet.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { WalletPageRoutingModule } from './wallet-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    WalletPageRoutingModule
  ],
  declarations: [WalletPage],
  providers: [
    WalletService
  ]
})
export class WalletPageModule {}
