import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class JwtService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient.post<{ access_token: string }>('http://127.0.0.1:8000/api/login_check', { email, password }).pipe(tap(res => {
      localStorage.setItem('access_token', res['token']);
    }))
  }

  logout() {
    //console.log(localStorage.getItem('access_token'))
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
}