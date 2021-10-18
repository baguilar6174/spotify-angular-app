import { Component, OnInit } from '@angular/core';
import { SONGS_DATA_ITEMS } from '@data/constants/tracks.const';
import { ISong } from '@data/interfaces';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  public tracks: ISong[] = SONGS_DATA_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
