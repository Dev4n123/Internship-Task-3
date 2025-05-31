import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({ 
  providedIn: 'root' 
}) 
export class ApiService { 
  constructor(private http: HttpClient) {} 

  // Get all products 
  getProducts() { 
    return this.http.get('https://fakestoreapi.com/products'); 
  } 

  // Get product by ID
  getproductById(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`); 
  }

  // Get all categories 
  getCategories() { 
    return this.http.get('https://fakestoreapi.com/products/categories'); 
  }
}
