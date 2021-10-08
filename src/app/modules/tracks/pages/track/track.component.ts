import { Component, OnInit } from '@angular/core';
import { SONGS_DATA_ITEMS } from '@data/constants/tracks.const';
import { ISong } from '@data/interfaces';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  public tracksTrending: ISong[] = SONGS_DATA_ITEMS;
  public tracksRandom: ISong[] = SONGS_DATA_ITEMS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
