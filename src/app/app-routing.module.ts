import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCheckGuard } from './guard/user-check.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/landingpage/landingpage.module').then( mod => mod.LandingpageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then( mod => mod.DashboardModule),
    canActivate: [UserCheckGuard]
  },
  {
    path: '*',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    UserCheckGuard
  ]
})
export class AppRoutingModule { }
