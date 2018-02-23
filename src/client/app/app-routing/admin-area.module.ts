import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminAreaComponent } from '../admin-area/admin-area.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AdminFireComponent } from '../admin-fire/admin-fire.component';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatDialogModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddImageComponent } from '../add-image/add-image.component';
import { UploadService } from '../services/upload.service';
import { TypesDialogComponent } from '../types-dialog/types-dialog.component';
import { FeatureDialogComponent } from '../feature-dialog/feature-dialog.component';
import { CustomerAreaComponent } from '../customer-area/customer-area.component';




const routes: Routes =[
  {path: '', component: AdminAreaComponent,
  // redirectTo: 'dashboard', pathMatch: 'full',
  children:[
    {path: 'fire-systems', component: AdminFireComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'customers', component: CustomerAreaComponent}
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  declarations: [AdminAreaComponent, SidebarComponent, AdminFireComponent, 
    DetailsDialogComponent, DashboardComponent, AddImageComponent, TypesDialogComponent, FeatureDialogComponent, CustomerAreaComponent],
  exports:[RouterModule],
  entryComponents:[DetailsDialogComponent, TypesDialogComponent, FeatureDialogComponent],
  providers:[UploadService]
})
export class AdminAreaModule { }
