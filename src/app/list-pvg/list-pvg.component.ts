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
  
  public compare (a : any,b : any){
    const metascoreA = a.metacritic;
    const metascoreB = b.metacritic;

    let comparison = 0;
    if (metascoreA>metascoreB) {
      comparison = -1;
    } else if (metascoreA<metascoreB) {
      comparison = 1;
    }
    return comparison;
  }
  
  ngOnInit(): void {
    this.gameService.getGamesFromServeur().subscribe(
      (result : any) => {
        this.games = result.results.sort(this.compare);
      }
    )   
  }

}
