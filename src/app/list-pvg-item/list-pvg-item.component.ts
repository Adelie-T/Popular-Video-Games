import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pvg-item',
  templateUrl: './list-pvg-item.component.html',
  styleUrls: ['./list-pvg-item.component.scss']
})
export class ListPVGItemComponent implements OnInit {

  constructor() { }

  @Input() gameName : string;
  @Input() releaseDate : Date;
  @Input() category : string;
  @Input() ranking : number;
  @Input() src : string;

  ngOnInit(): void {
  }

  onGetmore() {
    console.log("afficher seconde page");
  }

}
