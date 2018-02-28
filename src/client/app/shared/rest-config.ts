import {baseUrl} from './baseUrl';


// tslint:disable-next-line:prefer-const

export function restangularConfigFactory(RestangularProvider){
RestangularProvider.setBaseUrl(baseUrl);
RestangularProvider.setDefaultHeaders({Authorization: localStorage.getItem('solution-science-jwt')});


}
