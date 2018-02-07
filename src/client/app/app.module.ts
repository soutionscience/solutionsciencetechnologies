import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';




import { AppComponent } from './app.component';
import { RoutingModule } from './app-routing/routing.module';
import { restangularConfigFactory } from './shared/rest-config';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule,
    RoutingModule,
    RestangularModule.forRoot(restangularConfigFactory)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
