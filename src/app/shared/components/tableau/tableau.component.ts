import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
  encapsulation: ViewEncapsulation.None // on passe le shadow DOM à None
})
export class TableauComponent implements OnInit {

  @Input() headers: string[];
  constructor() { }

  ngOnInit() {
  }

}
