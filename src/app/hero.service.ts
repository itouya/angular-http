import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';

import { Hero } from './hero';

@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'http://localhost:8080/api/hero';  // URL to web api

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any>  {
    return this.http.get<Hero[]>(this.heroesUrl).retry(10);
  }
}