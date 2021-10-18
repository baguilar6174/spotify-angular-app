import { NgModule } from '@angular/core';
import { HistoryRoutingModule } from './history-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HistoryComponent } from './pages/history/history.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    HistoryComponent,
    SearchComponent
  ],
  imports: [
    SharedModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
