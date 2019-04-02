import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(

  ) {
  }

  get headers() {
    const token = localStorage.getItem('id_token') || null;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    return {
      headers,
      withCredentials: true
    };
  }
}
