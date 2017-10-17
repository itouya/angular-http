import { HeroService } from './hero.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  results: Hero[];

  constructor(private http: HttpClient,
              private heroService: HeroService ) {}

  ngOnInit(): void {
    this.heroService.getHeroes()
                    .subscribe(
                      (data) => {
                        this.results = data;
                      },
                      (err: HttpErrorResponse) => {
                        console.log('err.error: ', err.error);
                        console.log('err.message: ', err.message);
                        console.log('err.name: ', err.name);
                        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
                      });
  }
}
