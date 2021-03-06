import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  
  constructor() { }

  ngOnInit() {
  }
  votePlus(){
    this.hero.likes ++
  }
  voteLess(){
    this.hero.likes --
  }
}
