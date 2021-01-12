import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../core/services/game.service';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.scss']
})
export class SingleGameComponent implements OnInit {

  name : string = '';
  src : string = '';
  games : any[];

  constructor(private gameService : GameService,
              private activatedRoute : ActivatedRoute) { }

  getGameById (id : number){
    const game = this.games.find(
      (gameObject) => {
        return gameObject.id === id;
      }
    );
    return game;
  }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];

    this.gameService.getGamesFromServeur().subscribe(
      (data : any) => {
        this.games = data.results;
        
        console.log(id);
        
        this.name = this.getGameById(+id).name;
        this.src = this.getGameById(+id).background_image;
        
      }
    )       
      
    } 

  


}
