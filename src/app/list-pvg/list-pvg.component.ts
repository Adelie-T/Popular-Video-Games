import { Component, OnInit } from '@angular/core';
import { GameService } from '../core/services/game.service';

@Component({
  selector: 'app-list-pvg',
  templateUrl: './list-pvg.component.html',
  styleUrls: ['./list-pvg.component.scss']
})
export class ListPVGComponent implements OnInit {

  constructor(private gameService : GameService) { }

  games : any[];

  ngOnInit(): void {
    this.gameService.getGamesFromServeur().subscribe(
      (results : any) => {
        this.games = results;
      }
    )

  }

}
