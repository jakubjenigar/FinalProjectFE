import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080/api/customer';

@Injectable({
<<<<<<< HEAD
  providedIn: 'root'
})

export class CustomerService {
  constructor(private http: HttpClient) {}

  // Get all users
=======
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  // Get all customers
>>>>>>> 10a0a893d1f98e8b58d91e9b8e129978d6989747
  getAll() {
    return this.http.get(baseUrl);
  }

<<<<<<< HEAD
  // Create a new user
=======
  // Create a new customer
>>>>>>> 10a0a893d1f98e8b58d91e9b8e129978d6989747
  create(data) {
    return this.http.post(baseUrl, data);
  }

<<<<<<< HEAD
  // Get user by id
=======
  // Get customer by id
>>>>>>> 10a0a893d1f98e8b58d91e9b8e129978d6989747
  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

<<<<<<< HEAD
  // Update user information by id
=======
  // Update customer information by id
>>>>>>> 10a0a893d1f98e8b58d91e9b8e129978d6989747
  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

<<<<<<< HEAD
  // Delete all users
=======
  // Delete all customer
>>>>>>> 10a0a893d1f98e8b58d91e9b8e129978d6989747
  deleteAll() {
    return this.http.delete(baseUrl);
  }

<<<<<<< HEAD
  // Delete a user by id
=======
  // Delete a customer by id
>>>>>>> 10a0a893d1f98e8b58d91e9b8e129978d6989747
  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  // Login check
  loginCheck(username, password) {
    return this.http.get(`${baseUrl}/login/${username}/${password}`);
  }
<<<<<<< HEAD

=======
>>>>>>> 10a0a893d1f98e8b58d91e9b8e129978d6989747
}
