import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

import { HEROES } from '../../services/mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {


  heroes = HEROES;
  
  selectedHero: Hero;// = this.heroes[0];
  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}