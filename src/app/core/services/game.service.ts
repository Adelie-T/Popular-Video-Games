import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient : HttpClient) { }

  
   games = [
    {
      name : "Death Stranding",
      category : "Action-Adventure",
      releaseDate : "2019-11-08",
      ranking : 1,
      src : "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
    },
    {
      name : "Apex Legends",
      category : "Massively Multiplayer",
      releaseDate : "2019-02-04",
      ranking : 2,
      src : "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
    }
  ]

    
    getGameByRanking (id : number){
      const game = this.games.find(
        (gameObject) => {
          return gameObject.ranking === id;
        }
      );
      return game;
    }
  
  
  /*
  popgames = []; 

  getGamesFromServeur() {
    this.httpClient
      .get<any[]>('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added')
      .subscribe(
        (response) => {
          this.popgames = response;
        },
        (error) => {
          console.log("Error ! : " + error);
        }
      )
  }
  */
  
   

  
}
