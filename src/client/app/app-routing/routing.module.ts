import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ Routes, RouterModule} from '@angular/router'
import { AppComponent } from '../app.component';

const routes: Routes =[
  {path: 'home', loadChildren: './website.module#WebsiteModule'},
  { path:'admin', loadChildren: './admin-area.module#AdminAreaModule'},
  {path:'', redirectTo: 'admin', pathMatch: 'full'}


]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent],
  exports:[AppComponent]
})
export class RoutingModule { }
