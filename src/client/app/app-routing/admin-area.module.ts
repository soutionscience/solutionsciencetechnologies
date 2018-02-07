import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminAreaComponent } from '../admin-area/admin-area.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AdminFireComponent } from '../admin-fire/admin-fire.component';

const routes: Routes =[
  {path: '', component: AdminAreaComponent,
  children:[
    {path:'fire-systems', component: AdminFireComponent}
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminAreaComponent, SidebarComponent, AdminFireComponent],
  exports:[RouterModule]
})
export class AdminAreaModule { }
