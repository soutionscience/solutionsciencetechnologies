import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes=
[
  { path:'', component: DashboardComponent}

]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class DashboardModule { }
