import {baseUrl} from './baseUrl'

export function restangularConfigFactory(RestangularProvider){
    RestangularProvider.setBaseUrl(baseUrl)

}