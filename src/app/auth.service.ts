import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getToken() {
    let obs = this.http.post(
      'http://127.0.0.1:8000/api/login_check',
      {
        "email": "test@senapi.fr",
        "password": "testtest"
      }
    )
    obs.subscribe(
      (response) => {
        console.log(response)
        return response;
      });
  }
}
