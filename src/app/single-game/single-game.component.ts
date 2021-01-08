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
  src : string = 'https://i.pinimg.com/originals/d5/7e/06/d57e06fbff1eff7e8a25e3a4cf48cdba.png';


  constructor(private gamesService : GameService,
              private activatedRoute : ActivatedRoute) { }
    
  ngOnInit(): void {
    /*
    const id = this.activatedRoute.snapshot.params['id'];
    this.name = this.gamesService.getGameByRanking(+id).name;
    this.src = this.gamesService.getGameByRanking(+id).src;
    */
  }


}
