import { Injectable } from '@angular/core';
import { Featured } from '../_models/Models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeaturedService {
  private url: string = "http://localhost:8080/featured";

  constructor(private http: HttpClient) { }

  loadFeatured() {
    return this.http.get<Array<Featured>>(this.url);
  }

  postFeatured(featured: Featured) {
    return this.http.post<Featured>(this.url, featured);
  }

  loadFeaturedById() {
    return this.http.get<Featured>(this.url);
  }
}
