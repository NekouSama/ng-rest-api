import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokemon';
  list: string;
  constructor(private http: HttpClient) { }

  //list = this.restService.getEmployees()
  ngOnInit(): void {
    let obs = this.http.get('http://127.0.0.1:8000/api/pokemon');
    obs.subscribe(
      (response) => {
        console.log(response['hydra:member'])
        this.list = response['hydra:member'];
      });

  }



}
