import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080/api/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  // Get all carts
  getAll() {
    return this.http.get(baseUrl);
  }

  // Create a new cart
  create(data) {
    return this.http.post(baseUrl, data);
  }

  // Get cart by id
  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  // Update cart information by id
  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  // Delete all cart
  deleteAll() {
    return this.http.delete(baseUrl);
  }

  // Delete a cart by id
  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  getId(id) {
    return this.http.post(`${baseUrl}/${id}`, id);
  }

  validate() {
    if (!sessionStorage.getItem('customerId')) {
      this.getId('0')
      .subscribe( (response) => {
        sessionStorage.setItem('cartId', response['cartId']);
      });
    } else {
      this.getId(sessionStorage.getItem('customerId'))
      .subscribe( (response) => {
        sessionStorage.setItem('cartId', response['cartId']);
      });
    }
  }
}
