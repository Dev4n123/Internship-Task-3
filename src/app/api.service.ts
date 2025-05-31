import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

 getProduct(){
  return this.http.get('https://fakestoreapi.com/products');
 } 
 getProductById(id:number){
return this.http.get(`https://fakestoreapi.com/products/${id}`);
 }
getCategories(){
return this.http.get('https://fakestoreapi.com/products/categories');
 }
}
