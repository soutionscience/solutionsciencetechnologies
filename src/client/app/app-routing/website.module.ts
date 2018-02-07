import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BannerComponent } from '../banner/banner.component';

const routes: Routes=[
  {path:'', component: HomeComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, BannerComponent],
  exports:[RouterModule]
})
export class WebsiteModule { }
