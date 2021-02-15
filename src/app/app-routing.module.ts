import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EndpointDataResolver } from './resolvers/endpoint-data-resolver';

const routes: Routes = [
  {
    path: '', 
    resolve: {
      endpointData: EndpointDataResolver
    },
    loadChildren: () => import('./views/tabs/tabs.module').then(m => m.TabsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
