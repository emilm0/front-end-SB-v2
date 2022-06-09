import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './logger/login/login.component';
import { WelcomeComponent } from './logger/welcome/welcome.component';
import { LogoutComponent } from './logger/logout/logout.component';
import { RouteGuardService } from './logger/route-guard.service';

const routes: Routes = [
  {
    path: 'meetings',
    loadChildren: () => import('./meetings/meetings.module').then(m => m.MeetingsModule),
    canActivate: [RouteGuardService]
  },
  {
    path: 'editor',
    loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule),
    canActivate: [RouteGuardService]
  },
  { path: '', redirectTo: '/songs', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'welcome/:username', component: WelcomeComponent, canActivate: [RouteGuardService]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
