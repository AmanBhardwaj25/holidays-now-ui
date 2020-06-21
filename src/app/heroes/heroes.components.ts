this.heroesService
  .addHero(newHero)
  .subscribe(hero => this.heroes.push(hero));