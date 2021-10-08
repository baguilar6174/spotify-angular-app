import { NgModule } from '@angular/core';
import { TracksRoutingModule } from './tracks-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TrackComponent } from './pages/track/track.component';


@NgModule({
  declarations: [
    TrackComponent
  ],
  imports: [
    TracksRoutingModule,
    SharedModule,
  ]
})
export class TracksModule { }
