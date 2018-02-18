import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import { Home } from '../shared/home.model';



@Injectable()
export class ApiService {
  home: Home

  constructor(private restangular: Restangular) { }

  getResource(apiRoute):Observable<any[]>{
 return this.restangular.all(apiRoute).getList()
  }

  postResource(apiRoute, message){
   return this.restangular.all(apiRoute).post(message)
  }
addImage(apiRoute, id:number, imageDetail){
this.restangular.one(apiRoute, id).all('images').post(imageDetail)
}

postResourceTypes(apiRoute, id:number,typeDetail){

 return this.restangular.one(apiRoute, id ).all('types').post(typeDetail)
}
postResourceTypesImages(apiRoute, id:number, typeId:number, imageDetail){
 this.restangular.one(apiRoute, id).all('types').one(typeId).all('images').post(imageDetail)

}

}
