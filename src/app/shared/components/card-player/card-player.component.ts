import { Component, Input, OnInit } from '@angular/core';
import { ISong } from '@data/interfaces';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.scss']
})
export class CardPlayerComponent implements OnInit {

  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: ISong = { _id: 0, name: '', album: '', url: '', cover: '' };

  constructor(
    private multimediaService: MultimediaService,
  ) { }

  ngOnInit(): void {
  }

  sendPlay(track: ISong): void {
    this.multimediaService.trackInfo$.next(track)
  }

}
