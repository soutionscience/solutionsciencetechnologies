import {baseUrl} from './baseUrl';
import { AuthService } from '../services/auth.service';

// tslint:disable-next-line:prefer-const

export function restangularConfigFactory(RestangularProvider, auth: AuthService){
  RestangularProvider.setBaseUrl(baseUrl);
//   var setToken = function(){
//       return this.auth.getToken()
//   }


    // tslint:disable-next-line:max-line-length
//RestangularProvider.setDefaultHeaders({Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluMiIsImFkbWluIjpmYWxzZSwiaWF0IjoxNTE5ODE1Njc0LCJleHAiOjE1MTk4MzAwNzR9.iAgXJsvILfqJQezLO5ysKwFdCXJu9DGXrdjR93t4-5U'});
RestangularProvider.setDefaultHeaders({Authorization: localStorage.getItem('solution-science-jwt')});


}
