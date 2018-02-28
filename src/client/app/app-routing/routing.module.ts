import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ Routes, RouterModule} from '@angular/router'
import { AppComponent } from '../app.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes =[
  {path: 'home', loadChildren: './website.module#WebsiteModule'},
  { path:'admin', loadChildren: './admin-area.module#AdminAreaModule', canActivate:[AuthGuard]},
  {path:'', redirectTo: 'home', pathMatch: 'full'}


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
