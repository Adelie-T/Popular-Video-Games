import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pvg-item',
  templateUrl: './list-pvg-item.component.html',
  styleUrls: ['./list-pvg-item.component.scss']
})
export class ListPVGItemComponent implements OnInit {

  constructor(private router : Router) { }

  @Input() gameName : string;
  @Input() releaseDate : string;
  @Input() category :  any[];
  @Input() ranking : number;
  @Input() src : string;
  @Input() message : string;

  ngOnInit(): void {
  }


  public goVr() : void {
    this.router.navigate(['VRexp']);
  }

}
