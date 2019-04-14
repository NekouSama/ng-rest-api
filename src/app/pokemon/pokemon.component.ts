import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {
  title = 'pokemon';
  list: any;
  token: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };



  constructor(private http: HttpClient,
    private authService: AuthService) { }



  ngOnInit(): void {
    this.httpOptions.headers.set('Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1N…aZ-FtkYuLW9xXkB4AdP-myaPkg8yFA6sM4AU_FutkZPdbVYRE');
    let obs1 = this.http.post(
      'http://127.0.0.1:8000/api/login_check',
      {
        "email": "test@senapi.fr",
        "password": "testtest"
      }
    )
    obs1.subscribe(
      (response) => {
        console.log(response)
        this.token = response;
      });

    this.httpOptions.headers.set('Authorization', this.token);

    let obs = this.http.get('http://127.0.0.1:8000/api/pokemon/1', this.httpOptions);
    obs.subscribe(
      (response) => {
        console.log(response)
        this.list = response;
      });

  }


}
