import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080/api/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  // Get all customers
  getAll() {
    return this.http.get(baseUrl);
  }

  // Create a new customer
  create(data) {
    return this.http.post(baseUrl, data);
  }

  // Get customer by id
  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  // Update customer information by id
  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  // Delete all customer
  deleteAll() {
    return this.http.delete(baseUrl);
  }

  // Delete a customer by id
  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  // Login check
  loginCheck(username, password) {
    return this.http.get(`${baseUrl}/login/${username}/${password}`);
  }
}
