import { inject, Injectable } from '@angular/core';
import { IHero } from '../types/types';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://66562e799f970b3b36c48e76.mockapi.io/heroes/';
  http: HttpClient = inject(HttpClient);
  constructor() {}
  getAllHeroes(): Observable<IHero[]> {
    return this.http.get<IHero[]>(this.url);
  }
  getOne(id: string): Observable<IHero> {
    return this.http.get<IHero>(this.url + id);
  }
}
