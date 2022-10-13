import { Component, Input, OnInit } from '@angular/core';
import { Friend } from '../models/friend';

@Component({
  selector: 'friends-data-panel',
  templateUrl: './data-panel.component.html',
  styleUrls: ['./data-panel.component.scss']
})
export class DataPanelComponent implements OnInit {

  @Input() friends: Friend[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
