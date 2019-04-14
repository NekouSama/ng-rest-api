import { Component, OnInit } from '@angular/core';
import { JwtService } from '../jwt.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //token = localStorage.getItem('access_token');

  constructor(private jwtService: JwtService,
    private http: HttpClient,
    private router: Router) { }


  ngOnInit() {
  }

  isLogged() {
    return this.jwtService.loggedIn;
  }

  login() {
    //const headers = { Authorization: `Bearer ${this.token}` };
    let obs = this.jwtService.login('test@senapi.fr', 'testtest')
    obs.subscribe()

    /*let obs1 = this.http.get('http://127.0.0.1:8000/api/pokemon/1', { headers });
    obs1.subscribe(
      (response) => {
        console.log(response)
      });*/
  }

  logout() {
    this.jwtService.logout()
  }

  onView(id: number) {
    this.router.navigate(['/pokemons', id]);
  }

}
