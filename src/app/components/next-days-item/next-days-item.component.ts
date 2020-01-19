import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-next-days-item',
  templateUrl: './next-days-item.component.html',
  styleUrls: ['./next-days-item.component.css']
})
export class NextDaysItemComponent implements OnInit {

  constructor() { }

  @Input() nextDayForcast;

  ngOnInit() {
  }

}
