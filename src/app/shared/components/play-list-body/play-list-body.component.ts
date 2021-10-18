import { Component, Input, OnInit } from '@angular/core';
import { SONGS_DATA_ITEMS } from '@data/constants/tracks.const';
import { ISong } from '@data/interfaces';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.scss']
})
export class PlayListBodyComponent implements OnInit {

  @Input() tracks: ISong[] = []
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }

  // public tracks: ISong[] = SONGS_DATA_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }

}
