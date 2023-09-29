import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/views/portfolio/portfolio.component';
import { FeedComponent } from './components/views/feed/feed.component';
import { LoginComponent } from './components/views/auth/login/login.component';
import { SigninComponent } from './components/views/auth/signin/signin.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { AsideFeedComponent } from './components/template/aside-feed/aside-feed.component';
import { AsideFeedRightComponent } from './components/template/aside-feed-right/aside-feed-right.component';
import { AsideRightEmptyComponent } from './components/template/aside-right-empty/aside-right-empty.component';
import { ProfileCardSimpleComponent } from './components/template/profile-card-simple/profile-card-simple.component';
import { CardToStartComponent } from './components/template/card-to-start/card-to-start.component';
import { UpcomingComponent } from './components/template/upcoming/upcoming.component';
import { AchievementsComponent } from './components/template/achievements/achievements.component';
import { ChallengesComponent } from './components/template/challenges/challenges.component';
import { TeamChatComponent } from './components/template/team-chat/team-chat.component';
import { HomeComponent } from './components/views/home/home.component';
import { EmailConfirmComponent } from './components/template/email-confirm/email-confirm.component';
import { PasswordRecoveryComponent } from './components/template/password-recovery/password-recovery.component';
import { PasswordLockScreenComponent } from './components/template/password-lock-screen/password-lock-screen.component';
import { Erro404Component } from './components/template/erro404/erro404.component';
import { ExplorerComponent } from './components/views/explorer/explorer.component';
import { PerfilComponent } from './components/views/perfil/perfil.component';
import { AsideHomeComponent } from './components/template/aside-home/aside-home.component';
import { NavHomeComponent } from './components/template/nav-home/nav-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    FeedComponent,
    LoginComponent,
    SigninComponent,
    FooterComponent,
    HeaderComponent,
    AsideFeedComponent,
    AsideFeedRightComponent,
    AsideRightEmptyComponent,
    ProfileCardSimpleComponent,
    CardToStartComponent,
    UpcomingComponent,
    AchievementsComponent,
    ChallengesComponent,
    TeamChatComponent,
    HomeComponent,
    EmailConfirmComponent,
    PasswordRecoveryComponent,
    PasswordLockScreenComponent,
    Erro404Component,
    ExplorerComponent,
    PerfilComponent,
    AsideHomeComponent,
    NavHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
