import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'account-list',
    pathMatch: 'full'
  },

  {
    path: 'account-list',
    children : [
      {
        path : '',
        loadChildren: () => import('./components/account-list/account-list.module').then( m => m.AccountListPageModule),
      },
      {
        path : ':accountId',
        loadChildren: () => import('./components/account-details/account-details.module').then( m => m.AccountDetailsPageModule)

      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
