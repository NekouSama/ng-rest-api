import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtService } from '../jwt.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {
  title = 'pokemon';
  list: any;
  token = localStorage.getItem('access_token');

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient,
    private jwtService: JwtService,
    private route: ActivatedRoute,
    private router: Router) { }



  ngOnInit(): void {
    const headers = { Authorization: `Bearer ${this.token}` };

    const id = this.route.snapshot.params['id'] ? this.route.snapshot.params['id'] : 1;

    let obs1 = this.http.get(`http://127.0.0.1:8000/api/pokemon?page=${id}`, { headers });
    obs1.subscribe(
      (response) => {
        this.list = response['hydra:member'];
        console.log(response['hydra:totalItems'])
        console.log(response)
      });
  }

}
