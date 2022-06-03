import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './logger/login/login.component';
import { WelcomeComponent } from './logger/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/songs', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'welcome/:username', component: WelcomeComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
