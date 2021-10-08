import { Component, Input, OnInit } from '@angular/core';
import { ISong } from '@data/interfaces';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<ISong> = []
  
  constructor() { }

  ngOnInit(): void {
  }

}
