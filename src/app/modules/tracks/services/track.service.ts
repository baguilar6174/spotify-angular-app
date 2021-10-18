import { Injectable } from '@angular/core';
import { SONGS_DATA_ITEMS } from '@data/constants/tracks.const';
import { ISong } from '@data/interfaces/api/isong.metadats';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  datatracksTrending$: Observable<ISong[]> = of([]);
  datatracksRamdom$: Observable<any> = of([]);
  
  public tracksTrending: ISong[] = SONGS_DATA_ITEMS;

  constructor() {
    this.datatracksTrending$ = of(this.tracksTrending);
    this.datatracksRamdom$ = new Observable(o => {
      const temp: ISong = {
        _id: 69,
        name: 'Azul',
        album: 'Colores',
        cover: 'https://televisa.brightspotcdn.com/dims4/default/2e6fd37/2147483647/strip/true/crop/584x438+127+0/resize/818x614!/quality/90/?url=https%3A%2F%2Ftelevisa-brightspot.s3.amazonaws.com%2Fapi%2Fcc%2F43%2F509afa784b3eb4a9fa50fb412536%2Fjbalvin-102551813-105732937767204-3467149374219211531-n.jpg',
        url: 'assets/audio/track-8.mp3',
      };
      o.next([temp]);
    })
  }
}
