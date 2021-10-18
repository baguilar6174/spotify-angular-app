import { Injectable } from '@angular/core';
import { SONGS_DATA_ITEMS } from '@data/constants/tracks.const';
import { ISong } from '@data/interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  datatracksTrending$: Observable<ISong[]> = of([]);
  public tracksTrending: ISong[] = SONGS_DATA_ITEMS;

  constructor() {
    this.datatracksTrending$ = of(this.tracksTrending);
  }
}
