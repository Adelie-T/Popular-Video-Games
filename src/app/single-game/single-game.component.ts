import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../core/services/game.service';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.scss']
})
export class SingleGameComponent implements OnInit {

  name : string = 'Game';
  src : string = 'https://static.wikia.nocookie.net/mario/images/a/a1/NSMBUDX-Mario-1.png/revision/latest?cb=20190130012618&path-prefix=fr';


  constructor(private gamesService : GameService,
              private activatedRoute : ActivatedRoute) { }
    /*
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.name = this.gamesService.getGameByRanking(+id).name;
    this.src = this.gamesService.getGameByRanking(+id).src;
  }
  */

}
