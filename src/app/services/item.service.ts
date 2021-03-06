import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'https://finalprojectserver.azurewebsites.net/api/item';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  constructor(private http: HttpClient) {}

  // Get all users
  getAll() {
    return this.http.get(baseUrl);
  }

  // Create a new user
  create(data) {
    return this.http.post(baseUrl, data);
  }

  // Get user by id
  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  // Update user information by id
  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  // Delete all users
  deleteAll() {
    return this.http.delete(baseUrl);
  }

  // Delete a user by id
  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }


}
