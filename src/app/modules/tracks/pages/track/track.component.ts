import { Component, OnDestroy, OnInit } from '@angular/core';
import { ISong } from '@data/interfaces';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit, OnDestroy {

  public tracksTrending: ISong[] = [];
  public tracksRandom: ISong[] = [];

  public listObservers$: Array<Subscription> = []
  
  constructor(
    private trackService: TrackService
  ) { }

  ngOnInit(): void {
    const observer$ = this.trackService.datatracksTrending$.subscribe(r => {
      this.tracksTrending = r;
      this.tracksRandom = r;
    });

    const observerRandom$ = this.trackService.datatracksRamdom$.subscribe(r => {
      this.tracksRandom = [...this.tracksRandom, ...r];
    });
    this.listObservers$ = [observer$, observerRandom$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }

}
