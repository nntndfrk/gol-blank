import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  size = 32;

  // простой диапазон для того, что бы отобразить начальный рендер
  range = Array(this.size).fill(null).map((x, i) => i);

  constructor() {
  }

  ngOnInit() {
  }

}
