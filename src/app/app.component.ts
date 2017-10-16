import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

class Hero {
  id: number;
  name: string;
  account_image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  results: Hero[];

  constructor(private http: HttpClient ) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/hero') .subscribe((data: Hero[]) => {
      console.log(data);
      this.results = data;
    });
  }
}
