/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      149.99
    ),
    new Place(
      'p2',
      'Amour Toujours',
      'A romantic place in Paris!.',
      'https://leadingestates.com/wp-content/uploads/2015/11/184-10-manhattan-01.jpg',
      189.99
    ),
    new Place(
      'p3',
      'Amour Toujours2',
      'A romantic place in Paris!.',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/854fifthavenue-uppereastsidenewyork-tristan-harper-douglaselliman-photography-50524160-high-res-1493310151.jpg',
      189.99
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}
}
