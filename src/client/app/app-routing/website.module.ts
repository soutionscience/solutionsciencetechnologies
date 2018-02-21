import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BannerComponent } from '../banner/banner.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { LogoComponent } from '../logo/logo.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { QuoteComponent } from '../quote/quote.component';
import { FooterComponent } from '../footer/footer.component';
import { BottomComponent } from '../bottom/bottom.component';
import { FireComponent } from '../fire/fire.component';
import { GatesComponent } from '../gates/gates.component';
import { CctvComponent } from '../cctv/cctv.component';
import { AcessComponent } from '../acess/acess.component';
import { AlarmsComponent } from '../alarms/alarms.component';
import { CareersComponent } from '../careers/careers.component';

const routes: Routes=[
  {path:'', component: HomeComponent,
  children:[
    {path:'', component: WelcomeComponent},
    {path: 'fire', component: FireComponent},
  {path:'gates', component: GatesComponent},
{path:'cctv', component: CctvComponent},
{path:'alarms', component: AlarmsComponent},
{path: 'access', component: AcessComponent},
{path: 'careers', component: CareersComponent}]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, BannerComponent, MainMenuComponent, LogoComponent, WelcomeComponent, QuoteComponent, FooterComponent, BottomComponent, FireComponent, GatesComponent, CctvComponent, AcessComponent, AlarmsComponent, CareersComponent],
  exports:[RouterModule]
})
export class WebsiteModule { }
