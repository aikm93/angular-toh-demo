import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero:Hero = null;
  hero:Hero = {
	  id: 1,
	  name: 'Archana'
  };
  heroes: Hero[];
  
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
	  this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
	this.selectedHero = hero;  
  }
  
  getHeroes(): void {
	  this.heroes = this.heroService.getHeroes();
  }

}
