import str from './models/Search';
import {ID as identifier,add as summation,mult as product} from './views/searchView';
import * as searchView from './views/searchView'

console.log(str);
console.log(`using imported functions: ${product(identifier,2)}. ${str}`);
console.log(`Using alternative functions: ${searchView.mult(identifier,2)}. ${str}`);