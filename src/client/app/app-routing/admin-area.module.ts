import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminAreaComponent } from '../admin-area/admin-area.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

const routes: Routes =[
  {path: '', component: AdminAreaComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminAreaComponent, SidebarComponent],
  exports:[RouterModule]
})
export class AdminAreaModule { }
