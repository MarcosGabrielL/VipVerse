import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/views/auth/login/login.component';
import { SigninComponent } from './components/views/auth/signin/signin.component';
import { HomeComponent } from './components/views/home/home.component';
import { EmailConfirmComponent } from './components/template/email-confirm/email-confirm.component';
import { PasswordRecoveryComponent } from './components/template/password-recovery/password-recovery.component';
import { PasswordLockScreenComponent } from './components/template/password-lock-screen/password-lock-screen.component';
import { FeedComponent } from './components/views/feed/feed.component';
import { PortfolioComponent } from './components/views/portfolio/portfolio.component';

const routes: Routes = [

{ path: '', component: PortfolioComponent, pathMatch: 'full'},
{ path: 'home/usuario', component: HomeComponent, pathMatch: 'full'},
{ path: 'home/feed', component: FeedComponent, pathMatch: 'full'},
{ path: 'auth', component: LoginComponent, pathMatch: 'full'},
{ path: 'auth/cadastro', component: SigninComponent, pathMatch: 'full'},
{ path: 'auth/email/confirm', component: EmailConfirmComponent, pathMatch: 'full'},
{ path: 'auth/password-recovery', component: PasswordRecoveryComponent, pathMatch: 'full'},
{ path: 'auth/password-lock-screen', component: PasswordLockScreenComponent, pathMatch: 'full'},
                  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
