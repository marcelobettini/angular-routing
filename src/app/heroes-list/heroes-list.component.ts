import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { IHero } from '../types/types';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css',
})
export class HeroesListComponent implements OnInit {
  public heroesResult$!: Observable<IHero[]>;
  constructor(private api: ApiService, private router: Router) {}
  ngOnInit(): void {
    this.heroesResult$ = this.api.getAllHeroes();
  }
  onHeroClicked(heroId: string): void {
    this.router.navigate(['/heroes-list', heroId]);
  }
}
