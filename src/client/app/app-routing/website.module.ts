import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BannerComponent } from '../banner/banner.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { LogoComponent } from '../logo/logo.component';

const routes: Routes=[
  {path:'', component: HomeComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, BannerComponent, MainMenuComponent, LogoComponent],
  exports:[RouterModule]
})
export class WebsiteModule { }
