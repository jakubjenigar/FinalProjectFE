import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080/api/cartitem';

@Injectable({
  providedIn: 'root',
})
export class CartItemService {
  constructor(private http: HttpClient) {}

  // Get all cartitems
  getAll() {
    return this.http.get(baseUrl);
  }

  // Create a new cartitem
  create(data) {
    return this.http.post(baseUrl, data);
  }

  // Get cartitem by id
  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  // Update cartitem information by id
  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  // Delete all cartitem
  deleteAll() {
    return this.http.delete(baseUrl);
  }

  // Delete a cartitem by id
  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  getItems(id) {
    return this.http.get(`${baseUrl}/items/${id}`);
  }
}
