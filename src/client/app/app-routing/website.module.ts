import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BannerComponent } from '../banner/banner.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { LogoComponent } from '../logo/logo.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { QuoteComponent } from '../quote/quote.component';

const routes: Routes=[
  {path:'', component: HomeComponent,
  children:[
    {path:'', component: WelcomeComponent}]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, BannerComponent, MainMenuComponent, LogoComponent, WelcomeComponent, QuoteComponent],
  exports:[RouterModule]
})
export class WebsiteModule { }
