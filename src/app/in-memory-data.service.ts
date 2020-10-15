import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Super Negro'},
    { id: 12, name: 'Crackhead Billy' },
    { id: 13, name: 'Evil G' },
    { id: 14, name: 'Comatose' },
    { id: 15, name: 'Second First Lady' },
    { id: 16, name: 'Vanilla Ice' },
    { id: 17, name: 'David-O' },
    { id: 18, name: 'Biscuits' },
    { id: 19, name: 'Dean Da Dream' },
    { id: 20, name: 'Barry White' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}