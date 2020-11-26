import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pvg',
  templateUrl: './list-pvg.component.html',
  styleUrls: ['./list-pvg.component.scss']
})
export class ListPVGComponent implements OnInit {

  constructor() { }

  games = [
    {
      gameName : "ex1",
      category : "cat1",
      ranking : "r1",
      src : "https://www.jaimelesstartups.fr/wp-content/uploads/2019/12/logo-E2VR.png"
    },
    {
      gameName : "ex2",
      category : "cat2",
      ranking : "r2",
      src : "https://www.jaimelesstartups.fr/wp-content/uploads/2019/12/logo-E2VR.png"
    }

  ]

  ngOnInit(): void {
  }

}
