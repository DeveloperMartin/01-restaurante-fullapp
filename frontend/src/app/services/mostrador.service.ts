import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostradorService {

  constructor(private httpClient: HttpClient) { }
  
  getFood() {
    return this.httpClient.get('http://localhost:3000/foods');
  }
  
  getDrink() {
    return this.httpClient.get('http://localhost:3000/drinks');
  }
}
