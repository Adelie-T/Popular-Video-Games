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
 

  ngOnInit(): void {
  }


  public goVr() : void {
    this.router.navigate(['VRexp']);
  }

  public getCategory() {
    let result = "";
    for (let cat of this.category){
      result = result + ' ' + cat["name"]; 
    }
    console.log(this.category);
    return result;
  }

}
