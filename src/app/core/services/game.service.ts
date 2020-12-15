import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient : HttpClient) { }

  /*
   games = [
    {
      name : "Death Stranding",
      category : [
        {
          "id": 3,
          "name": "Adventure",
          "slug": "adventure"
        },
        {
          "id": 4,
          "name": "Action",
          "slug": "action"
        }
      ],
      releaseDate : "2019-11-08",
      ranking : 1,
      src : "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
    },
    {
      name : "Apex Legends",
      category : [
        {
          "id": 3,
          "name": "Adventure",
          "slug": "adventure"
        },
        {
          "id": 4,
          "name": "Action",
          "slug": "action"
        }
      ],
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

  */

  games = {
    "count": 79214,
    "next": "https://api.rawg.io/api/games?dates=2019-01-01%2C2019-12-31&ordering=-added&page=2",
    "previous": null,
    "results":[
    {
      "slug": "death-stranding",
      "name": "Death Stranding",
      "playtime": 6,
      "platforms": [
        {
          "platform": {
            "id": 4,
            "name": "PC",
            "slug": "pc"
          }
        },
        {
          "platform": {
            "id": 18,
            "name": "PlayStation 4",
            "slug": "playstation4"
          }
        }
      ],
      "stores": [
        {
          "store": {
            "id": 1,
            "name": "Steam",
            "slug": "steam"
          }
        },
        {
          "store": {
            "id": 3,
            "name": "PlayStation Store",
            "slug": "playstation-store"
          }
        },
        {
          "store": {
            "id": 11,
            "name": "Epic Games",
            "slug": "epic-games"
          }
        }
      ],
      "released": "2019-11-08",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
      "rating": 4, //4.37,
      "rating_top": 5,
      "ratings": [
        {
          "id": 5,
          "title": "exceptional",
          "count": 603,
          "percent": 61.78
        },
        {
          "id": 4,
          "title": "recommended",
          "count": 231,
          "percent": 23.67
        },
        {
          "id": 3,
          "title": "meh",
          "count": 91,
          "percent": 9.32
        },
        {
          "id": 1,
          "title": "skip",
          "count": 51,
          "percent": 5.23
        }
      ],
      "ratings_count": 943,
      "reviews_text_count": 22,
      "added": 4982,
      "added_by_status": {
        "yet": 322,
        "owned": 2526,
        "beaten": 615,
        "toplay": 1170,
        "dropped": 106,
        "playing": 243
      },
      "metacritic": 84,
      "suggestions_count": 573,
      "updated": "2020-05-26T10:33:54",
      "id": 50738,
      "score": null,
      "clip": {
        "clip": "https://media.rawg.io/media/stories-640/46b/46b2ab41014eb0d6b357fd9d155f90eb.mp4",
        "clips": {
          "320": "https://media.rawg.io/media/stories-320/7a5/7a5cd5eb8e382a76856d9fb66e4e4e31.mp4",
          "640": "https://media.rawg.io/media/stories-640/46b/46b2ab41014eb0d6b357fd9d155f90eb.mp4",
          "full": "https://media.rawg.io/media/stories/a30/a3017aa7740f387a158cbc343524275b.mp4"
        },
        "video": "JArGd-LQa7U",
        "preview": "https://media.rawg.io/media/stories-previews/da3/da3ce38aa5a76550b2c4e4c8dbdb9d52.jpg"
      },
      "tags": [
        {
          "id": 69,
          "name": "Action-Adventure",
          "slug": "action-adventure",
          "language": "eng",
          "games_count": 6387,
          "image_background": "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg"
        },
        {
          "id": 172,
          "name": "Aliens",
          "slug": "aliens",
          "language": "eng",
          "games_count": 3676,
          "image_background": "https://media.rawg.io/media/screenshots/65c/65c9c15e274705b5fe343e424ce76ec8.jpg"
        },
        {
          "id": 40845,
          "name": "Partial Controller Support",
          "slug": "partial-controller-support",
          "language": "eng",
          "games_count": 6822,
          "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
        },
        {
          "id": 13,
          "name": "Atmospheric",
          "slug": "atmospheric",
          "language": "eng",
          "games_count": 10530,
          "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
        },
        {
          "id": 110,
          "name": "Cinematic",
          "slug": "cinematic",
          "language": "eng",
          "games_count": 303,
          "image_background": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
        },
        {
          "id": 209,
          "name": "Drama",
          "slug": "drama",
          "language": "eng",
          "games_count": 778,
          "image_background": "https://media.rawg.io/media/games/bf5/bf56a48c9a908bfea61c17b4d5d51f77.jpg"
        },
        {
          "id": 6,
          "name": "Exploration",
          "slug": "exploration",
          "language": "eng",
          "games_count": 8199,
          "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
        },
        {
          "id": 42,
          "name": "Great Soundtrack",
          "slug": "great-soundtrack",
          "language": "eng",
          "games_count": 3091,
          "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
        },
        {
          "id": 216,
          "name": "Heist",
          "slug": "heist",
          "language": "eng",
          "games_count": 215,
          "image_background": "https://media.rawg.io/media/screenshots/7c0/7c0c75c3ce1a82a680522c5255ff7c5f.jpg"
        },
        {
          "id": 16,
          "name": "Horror",
          "slug": "horror",
          "language": "eng",
          "games_count": 17748,
          "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        },
        {
          "id": 120,
          "name": "Memes",
          "slug": "memes",
          "language": "eng",
          "games_count": 928,
          "image_background": "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg"
        },
        {
          "id": 44,
          "name": "Nudity",
          "slug": "nudity",
          "language": "eng",
          "games_count": 2224,
          "image_background": "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg"
        },
        {
          "id": 36,
          "name": "Open World",
          "slug": "open-world",
          "language": "eng",
          "games_count": 3164,
          "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
        },
        {
          "id": 43,
          "name": "Post-apocalyptic",
          "slug": "post-apocalyptic",
          "language": "eng",
          "games_count": 1520,
          "image_background": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg"
        },
        {
          "id": 32,
          "name": "Sci-fi",
          "slug": "sci-fi",
          "language": "eng",
          "games_count": 8531,
          "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
        },
        {
          "id": 31,
          "name": "Singleplayer",
          "slug": "singleplayer",
          "language": "eng",
          "games_count": 94283,
          "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
        },
        {
          "id": 15,
          "name": "Stealth",
          "slug": "stealth",
          "language": "eng",
          "games_count": 3278,
          "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
        },
        {
          "id": 118,
          "name": "Story Rich",
          "slug": "story-rich",
          "language": "eng",
          "games_count": 8086,
          "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
        },
        {
          "id": 1,
          "name": "Survival",
          "slug": "survival",
          "language": "eng",
          "games_count": 4132,
          "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
        },
        {
          "id": 149,
          "name": "Third Person",
          "slug": "third-person",
          "language": "eng",
          "games_count": 3195,
          "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
        },
        {
          "id": 91,
          "name": "Walking Simulator",
          "slug": "walking-simulator",
          "language": "eng",
          "games_count": 3275,
          "image_background": "https://media.rawg.io/media/games/9e5/9e5b91a6d02e66b8d450a977a59ae123.jpg"
        },
        {
          "id": 478,
          "name": "3rd-Person Perspective",
          "slug": "3rd-person-perspective",
          "language": "eng",
          "games_count": 81,
          "image_background": "https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg"
        },
        {
          "id": 578,
          "name": "Masterpiece",
          "slug": "masterpiece",
          "language": "eng",
          "games_count": 170,
          "image_background": "https://media.rawg.io/media/games/0fa/0fa9e2b8397b332902d3b56c73888d52.jpg"
        },
        {
          "id": 42392,
          "name": "Приключение",
          "slug": "prikliuchenie",
          "language": "rus",
          "games_count": 18381,
          "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
        },
        {
          "id": 42394,
          "name": "Глубокий сюжет",
          "slug": "glubokii-siuzhet",
          "language": "rus",
          "games_count": 3742,
          "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
        },
        {
          "id": 42396,
          "name": "Для одного игрока",
          "slug": "dlia-odnogo-igroka",
          "language": "rus",
          "games_count": 12690,
          "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
        },
        {
          "id": 42400,
          "name": "Атмосфера",
          "slug": "atmosfera",
          "language": "rus",
          "games_count": 4987,
          "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
        },
        {
          "id": 42401,
          "name": "Отличный саундтрек",
          "slug": "otlichnyi-saundtrek",
          "language": "rus",
          "games_count": 4323,
          "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
        },
        {
          "id": 42406,
          "name": "Нагота",
          "slug": "nagota",
          "language": "rus",
          "games_count": 2032,
          "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
        },
        {
          "id": 42417,
          "name": "Экшен",
          "slug": "ekshen",
          "language": "rus",
          "games_count": 20346,
          "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
        },
        {
          "id": 42423,
          "name": "Научная фантастика",
          "slug": "nauchnaia-fantastika",
          "language": "rus",
          "games_count": 2851,
          "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
        },
        {
          "id": 42435,
          "name": "Шедевр",
          "slug": "shedevr",
          "language": "rus",
          "games_count": 1058,
          "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
        },
        {
          "id": 42439,
          "name": "Стелс",
          "slug": "stels",
          "language": "rus",
          "games_count": 670,
          "image_background": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg"
        },
        {
          "id": 42441,
          "name": "От третьего лица",
          "slug": "ot-tretego-litsa",
          "language": "rus",
          "games_count": 1509,
          "image_background": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg"
        },
        {
          "id": 42442,
          "name": "Открытый мир",
          "slug": "otkrytyi-mir",
          "language": "rus",
          "games_count": 2277,
          "image_background": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg"
        },
        {
          "id": 42447,
          "name": "Ограбления",
          "slug": "ogrableniia",
          "language": "rus",
          "games_count": 77,
          "image_background": "https://media.rawg.io/media/screenshots/8e6/8e6f45ae541c5016e270e132d223ffe2.jpg"
        },
        {
          "id": 42452,
          "name": "Выживание",
          "slug": "vyzhivanie",
          "language": "rus",
          "games_count": 2260,
          "image_background": "https://media.rawg.io/media/games/d9f/d9f982e042df6263684ba1fdea3efc1c.jpg"
        },
        {
          "id": 42464,
          "name": "Исследование",
          "slug": "issledovanie",
          "language": "rus",
          "games_count": 2075,
          "image_background": "https://media.rawg.io/media/games/336/336c6bd63d83cf8e59937ab8895d1240.jpg"
        },
        {
          "id": 42488,
          "name": "Пост-апокалипсис",
          "slug": "post-apokalipsis",
          "language": "rus",
          "games_count": 602,
          "image_background": "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg"
        },
        {
          "id": 42555,
          "name": "Симулятор ходьбы",
          "slug": "simuliator-khodby",
          "language": "rus",
          "games_count": 707,
          "image_background": "https://media.rawg.io/media/games/9e5/9e5b91a6d02e66b8d450a977a59ae123.jpg"
        },
        {
          "id": 42623,
          "name": "Кинематографичная",
          "slug": "kinematografichnaia",
          "language": "rus",
          "games_count": 245,
          "image_background": "https://media.rawg.io/media/games/b80/b80de593e66136f8a35c57960cc8fa3b.jpg"
        }
      ],
      "esrb_rating": {
        "id": 4,
        "name": "Mature",
        "slug": "mature",
        "name_en": "Mature",
        "name_ru": "С 17 лет"
      },
      "user_game": null,
      "reviews_count": 976,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
        {
          "id": -1,
          "image": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
        },
        {
          "id": 802887,
          "image": "https://media.rawg.io/media/screenshots/9da/9da640f5aa62f6fc00a4d1d255460737.jpg"
        },
        {
          "id": 802890,
          "image": "https://media.rawg.io/media/screenshots/3d2/3d2a4337cf7673b086a1623d9e5ed2f3.jpg"
        },
        {
          "id": 802891,
          "image": "https://media.rawg.io/media/screenshots/5f3/5f3bc8289f9545db69a30fc414e94186.jpg"
        },
        {
          "id": 802894,
          "image": "https://media.rawg.io/media/screenshots/2b7/2b731c32ebc308c30abe974cd1266648.jpg"
        },
        {
          "id": 802895,
          "image": "https://media.rawg.io/media/screenshots/460/4606e5ba14266eb2292cea7444e4239b.jpg"
        },
        {
          "id": 802896,
          "image": "https://media.rawg.io/media/screenshots/2f1/2f10403f41e636dac29d1af2c5c1b982.jpg"
        }
      ],
      "parent_platforms": [
        {
          "platform": {
            "id": 1,
            "name": "PC",
            "slug": "pc"
          }
        },
        {
          "platform": {
            "id": 2,
            "name": "PlayStation",
            "slug": "playstation"
          }
        }
      ],
      "genres": [
        {
          "id": 3,
          "name": "Adventure",
          "slug": "adventure"
        },
        {
          "id": 4,
          "name": "Action",
          "slug": "action"
        }
      ]
    },
    {
      "slug": "apex-legends",
      "name": "Apex Legends",
      "playtime": 3,
      "platforms": [
        {
          "platform": {
            "id": 4,
            "name": "PC",
            "slug": "pc"
          }
        },
        {
          "platform": {
            "id": 1,
            "name": "Xbox One",
            "slug": "xbox-one"
          }
        },
        {
          "platform": {
            "id": 18,
            "name": "PlayStation 4",
            "slug": "playstation4"
          }
        },
        {
          "platform": {
            "id": 7,
            "name": "Nintendo Switch",
            "slug": "nintendo-switch"
          }
        },
        {
          "platform": {
            "id": 5,
            "name": "macOS",
            "slug": "macos"
          }
        }
      ],
      "stores": [
        {
          "store": {
            "id": 1,
            "name": "Steam",
            "slug": "steam"
          }
        },
        {
          "store": {
            "id": 3,
            "name": "PlayStation Store",
            "slug": "playstation-store"
          }
        },
        {
          "store": {
            "id": 2,
            "name": "Xbox Store",
            "slug": "xbox-store"
          }
        }
      ],
      "released": "2019-02-04",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
      "rating": 3, // 3.66,
      "rating_top": 4,
      "ratings": [
        {
          "id": 4,
          "title": "recommended",
          "count": 682,
          "percent": 49.35
        },
        {
          "id": 3,
          "title": "meh",
          "count": 370,
          "percent": 26.77
        },
        {
          "id": 5,
          "title": "exceptional",
          "count": 224,
          "percent": 16.21
        },
        {
          "id": 1,
          "title": "skip",
          "count": 106,
          "percent": 7.67
        }
      ],
      "ratings_count": 1370,
      "reviews_text_count": 11,
      "added": 4796,
      "added_by_status": {
        "yet": 71,
        "owned": 3358,
        "beaten": 189,
        "toplay": 48,
        "dropped": 813,
        "playing": 317
      },
      "metacritic": 88,
      "suggestions_count": 678,
      "updated": "2020-10-21T23:24:50",
      "id": 290856,
      "score": null,
      "clip": {
        "clip": "https://media.rawg.io/media/stories-640/8e5/8e548907d9135f329e6680844f5d5a50.mp4",
        "clips": {
          "320": "https://media.rawg.io/media/stories-320/699/699a0f30019920cd1c4f059c0364f921.mp4",
          "640": "https://media.rawg.io/media/stories-640/8e5/8e548907d9135f329e6680844f5d5a50.mp4",
          "full": "https://media.rawg.io/media/stories/497/4970b7c69afbd43037e271530c981b4a.mp4"
        },
        "video": "JpQGDAz1TO4",
        "preview": "https://media.rawg.io/media/stories-previews/e91/e91161eb7bada240ba026b2db00f124f.jpg"
      },
      "tags": [
        {
          "id": 40836,
          "name": "Full controller support",
          "slug": "full-controller-support",
          "language": "eng",
          "games_count": 9473,
          "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
        },
        {
          "id": 69,
          "name": "Action-Adventure",
          "slug": "action-adventure",
          "language": "eng",
          "games_count": 6387,
          "image_background": "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg"
        },
        {
          "id": 13,
          "name": "Atmospheric",
          "slug": "atmospheric",
          "language": "eng",
          "games_count": 10530,
          "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
        },
        {
          "id": 121,
          "name": "Character Customization",
          "slug": "character-customization",
          "language": "eng",
          "games_count": 1099,
          "image_background": "https://media.rawg.io/media/games/046/0464f4a36cd975a37c95b93b06058855.jpg"
        },
        {
          "id": 110,
          "name": "Cinematic",
          "slug": "cinematic",
          "language": "eng",
          "games_count": 303,
          "image_background": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
        },
        {
          "id": 18,
          "name": "Co-op",
          "slug": "co-op",
          "language": "eng",
          "games_count": 5951,
          "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
        },
        {
          "id": 226,
          "name": "Cyberpunk",
          "slug": "cyberpunk",
          "language": "eng",
          "games_count": 2060,
          "image_background": "https://media.rawg.io/media/games/1ed/1edaaa9e24e0072772244633d01642f4.jpg"
        },
        {
          "id": 41,
          "name": "Dark",
          "slug": "dark",
          "language": "eng",
          "games_count": 6073,
          "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
        },
        {
          "id": 6,
          "name": "Exploration",
          "slug": "exploration",
          "language": "eng",
          "games_count": 8199,
          "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
        },
        {
          "id": 8,
          "name": "First-Person",
          "slug": "first-person",
          "language": "eng",
          "games_count": 9734,
          "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
        },
        {
          "id": 30,
          "name": "FPS",
          "slug": "fps",
          "language": "eng",
          "games_count": 6284,
          "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
        },
        {
          "id": 79,
          "name": "Free to Play",
          "slug": "free-to-play",
          "language": "eng",
          "games_count": 3409,
          "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
        },
        {
          "id": 7,
          "name": "Multiplayer",
          "slug": "multiplayer",
          "language": "eng",
          "games_count": 22719,
          "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
        },
        {
          "id": 9,
          "name": "Online Co-Op",
          "slug": "online-co-op",
          "language": "eng",
          "games_count": 2356,
          "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
        },
        {
          "id": 157,
          "name": "PvP",
          "slug": "pvp",
          "language": "eng",
          "games_count": 3024,
          "image_background": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg"
        },
        {
          "id": 32,
          "name": "Sci-fi",
          "slug": "sci-fi",
          "language": "eng",
          "games_count": 8531,
          "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
        },
        {
          "id": 1,
          "name": "Survival",
          "slug": "survival",
          "language": "eng",
          "games_count": 4132,
          "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
        },
        {
          "id": 80,
          "name": "Tactical",
          "slug": "tactical",
          "language": "eng",
          "games_count": 1918,
          "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
        },
        {
          "id": 11,
          "name": "Team-Based",
          "slug": "team-based",
          "language": "eng",
          "games_count": 547,
          "image_background": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg"
        },
        {
          "id": 1465,
          "name": "combat",
          "slug": "combat",
          "language": "eng",
          "games_count": 4046,
          "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
        },
        {
          "id": 12983,
          "name": "lootboxes",
          "slug": "lootboxes",
          "language": "eng",
          "games_count": 4,
          "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
        },
        {
          "id": 35162,
          "name": "Battle Royale",
          "slug": "battle-royale-2",
          "language": "eng",
          "games_count": 93,
          "image_background": "https://media.rawg.io/media/screenshots/72a/72a4eed0eb1c0c9efadb85c371036f7d.jpg"
        },
        {
          "id": 42392,
          "name": "Приключение",
          "slug": "prikliuchenie",
          "language": "rus",
          "games_count": 18381,
          "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
        },
        {
          "id": 42400,
          "name": "Атмосфера",
          "slug": "atmosfera",
          "language": "rus",
          "games_count": 4987,
          "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
        },
        {
          "id": 42417,
          "name": "Экшен",
          "slug": "ekshen",
          "language": "rus",
          "games_count": 20346,
          "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
        },
        {
          "id": 42423,
          "name": "Научная фантастика",
          "slug": "nauchnaia-fantastika",
          "language": "rus",
          "games_count": 2851,
          "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
        },
        {
          "id": 42425,
          "name": "Для нескольких игроков",
          "slug": "dlia-neskolkikh-igrokov",
          "language": "rus",
          "games_count": 4411,
          "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
        },
        {
          "id": 42427,
          "name": "Шутер от первого лица",
          "slug": "shuter-ot-pervogo-litsa",
          "language": "rus",
          "games_count": 2034,
          "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
        },
        {
          "id": 42428,
          "name": "Шутер",
          "slug": "shuter",
          "language": "rus",
          "games_count": 2852,
          "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
        },
        {
          "id": 42429,
          "name": "От первого лица",
          "slug": "ot-pervogo-litsa",
          "language": "rus",
          "games_count": 2928,
          "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
        },
        {
          "id": 42433,
          "name": "Совместная игра по сети",
          "slug": "sovmestnaia-igra-po-seti",
          "language": "rus",
          "games_count": 903,
          "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
        },
        {
          "id": 42434,
          "name": "Игрок против игрока",
          "slug": "igrok-protiv-igroka",
          "language": "rus",
          "games_count": 934,
          "image_background": "https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg"
        },
        {
          "id": 42436,
          "name": "Тактика",
          "slug": "taktika",
          "language": "rus",
          "games_count": 1124,
          "image_background": "https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg"
        },
        {
          "id": 42450,
          "name": "Командная",
          "slug": "komandnaia",
          "language": "rus",
          "games_count": 355,
          "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
        },
        {
          "id": 42452,
          "name": "Выживание",
          "slug": "vyzhivanie",
          "language": "rus",
          "games_count": 2260,
          "image_background": "https://media.rawg.io/media/games/d9f/d9f982e042df6263684ba1fdea3efc1c.jpg"
        },
        {
          "id": 42470,
          "name": "Киберпанк",
          "slug": "kiberpank",
          "language": "rus",
          "games_count": 501,
          "image_background": "https://media.rawg.io/media/games/345/34589f72fe291f0f38f12488f28c8f43.jpg"
        },
        {
          "id": 42477,
          "name": "Мрачная",
          "slug": "mrachnaia",
          "language": "rus",
          "games_count": 1138,
          "image_background": "https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg"
        },
        {
          "id": 42530,
          "name": "Кастомизация персонажа",
          "slug": "kastomizatsiia-personazha",
          "language": "rus",
          "games_count": 708,
          "image_background": "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg"
        },
        {
          "id": 42623,
          "name": "Кинематографичная",
          "slug": "kinematografichnaia",
          "language": "rus",
          "games_count": 245,
          "image_background": "https://media.rawg.io/media/games/b80/b80de593e66136f8a35c57960cc8fa3b.jpg"
        },
        {
          "id": 42675,
          "name": "Королевская битва",
          "slug": "korolevskaia-bitva",
          "language": "rus",
          "games_count": 188,
          "image_background": "https://media.rawg.io/media/screenshots/fb1/fb14702a69242a4ad9bfddc4fdcc1e27.jpg"
        },
        {
          "id": 49953,
          "name": "Hero Shooter",
          "slug": "hero-shooter-2",
          "language": "eng",
          "games_count": 66,
          "image_background": "https://media.rawg.io/media/screenshots/72a/72a4eed0eb1c0c9efadb85c371036f7d.jpg"
        }
      ],
      "esrb_rating": {
        "id": 3,
        "name": "Teen",
        "slug": "teen",
        "name_en": "Teen",
        "name_ru": "С 13 лет"
      },
      "user_game": null,
      "reviews_count": 1382,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
        {
          "id": -1,
          "image": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
        },
        {
          "id": 1830288,
          "image": "https://media.rawg.io/media/screenshots/a59/a593423f503eae7f29cd642827cda18d.jpg"
        },
        {
          "id": 1830289,
          "image": "https://media.rawg.io/media/screenshots/e7a/e7a1e5ec1b9861c340cdbef43bb47678.jpg"
        },
        {
          "id": 1830290,
          "image": "https://media.rawg.io/media/screenshots/76e/76e5b435f9ba8ed79da0e5dd25762075.jpg"
        },
        {
          "id": 1830291,
          "image": "https://media.rawg.io/media/screenshots/b4b/b4b3c320a4a3965d5da85406dcd05b77.jpg"
        },
        {
          "id": 1830292,
          "image": "https://media.rawg.io/media/screenshots/52a/52a0266fde34d2a24f4ad6aee3da5051.jpg"
        },
        {
          "id": 1830293,
          "image": "https://media.rawg.io/media/screenshots/05a/05a9a772ede23255689d1218b3b9a728.jpg"
        }
      ],
      "parent_platforms": [
        {
          "platform": {
            "id": 1,
            "name": "PC",
            "slug": "pc"
          }
        },
        {
          "platform": {
            "id": 2,
            "name": "PlayStation",
            "slug": "playstation"
          }
        },
        {
          "platform": {
            "id": 3,
            "name": "Xbox",
            "slug": "xbox"
          }
        },
        {
          "platform": {
            "id": 5,
            "name": "Apple Macintosh",
            "slug": "mac"
          }
        },
        {
          "platform": {
            "id": 7,
            "name": "Nintendo",
            "slug": "nintendo"
          }
        }
      ],
      "genres": [
        {
          "id": 59,
          "name": "Massively Multiplayer",
          "slug": "massively-multiplayer"
        },
        {
          "id": 2,
          "name": "Shooter",
          "slug": "shooter"
        },
        {
          "id": 3,
          "name": "Adventure",
          "slug": "adventure"
        },
        {
          "id": 4,
          "name": "Action",
          "slug": "action"
        }
      ]
    },
    {
      "slug": "shadows-die-twice",
      "name": "Sekiro: Shadows Die Twice",
      "playtime": 17,
      "platforms": [
        {
          "platform": {
            "id": 4,
            "name": "PC",
            "slug": "pc"
          }
        },
        {
          "platform": {
            "id": 1,
            "name": "Xbox One",
            "slug": "xbox-one"
          }
        },
        {
          "platform": {
            "id": 18,
            "name": "PlayStation 4",
            "slug": "playstation4"
          }
        }
      ],
      "stores": [
        {
          "store": {
            "id": 1,
            "name": "Steam",
            "slug": "steam"
          }
        },
        {
          "store": {
            "id": 3,
            "name": "PlayStation Store",
            "slug": "playstation-store"
          }
        },
        {
          "store": {
            "id": 2,
            "name": "Xbox Store",
            "slug": "xbox-store"
          }
        }
      ],
      "released": "2019-03-22",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/b1c/b1c27510817af1ad7d23494e07822777.jpg",
      "rating": 4.35,
      "rating_top": 5,
      "ratings": [
        {
          "id": 5,
          "title": "exceptional",
          "count": 696,
          "percent": 59.13
        },
        {
          "id": 4,
          "title": "recommended",
          "count": 322,
          "percent": 27.36
        },
        {
          "id": 3,
          "title": "meh",
          "count": 99,
          "percent": 8.41
        },
        {
          "id": 1,
          "title": "skip",
          "count": 60,
          "percent": 5.1
        }
      ],
      "ratings_count": 1157,
      "reviews_text_count": 16,
      "added": 4241,
      "added_by_status": {
        "yet": 275,
        "owned": 1921,
        "beaten": 625,
        "toplay": 898,
        "dropped": 292,
        "playing": 230
      },
      "metacritic": 90,
      "suggestions_count": 419,
      "updated": "2019-09-17T15:58:19",
      "id": 50734,
      "score": null,
      "clip": {
        "clip": "https://media.rawg.io/media/stories-640/889/8899185a29c9f2f0ca6c89dbfa6a4331.mp4",
        "clips": {
          "320": "https://media.rawg.io/media/stories-320/a6e/a6e3d919987ec0f1a88b7cde8cccaae3.mp4",
          "640": "https://media.rawg.io/media/stories-640/889/8899185a29c9f2f0ca6c89dbfa6a4331.mp4",
          "full": "https://media.rawg.io/media/stories/2d5/2d55ab47f53118f4884c140e113b41cb.mp4"
        },
        "video": "26B8VI-QNok",
        "preview": "https://media.rawg.io/media/stories-previews/076/076275e9fba7397e8d9a3635898f67d0.jpg"
      },
      "tags": [
        {
          "id": 69,
          "name": "Action-Adventure",
          "slug": "action-adventure",
          "language": "eng",
          "games_count": 6387,
          "image_background": "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg"
        },
        {
          "id": 97,
          "name": "Action RPG",
          "slug": "action-rpg",
          "language": "eng",
          "games_count": 2899,
          "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
        },
        {
          "id": 40845,
          "name": "Partial Controller Support",
          "slug": "partial-controller-support",
          "language": "eng",
          "games_count": 6822,
          "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
        },
        {
          "id": 278,
          "name": "Assassin",
          "slug": "assassin",
          "language": "eng",
          "games_count": 507,
          "image_background": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg"
        },
        {
          "id": 13,
          "name": "Atmospheric",
          "slug": "atmospheric",
          "language": "eng",
          "games_count": 10530,
          "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
        },
        {
          "id": 40,
          "name": "Dark Fantasy",
          "slug": "dark-fantasy",
          "language": "eng",
          "games_count": 1275,
          "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
        },
        {
          "id": 49,
          "name": "Difficult",
          "slug": "difficult",
          "language": "eng",
          "games_count": 7400,
          "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
        },
        {
          "id": 6,
          "name": "Exploration",
          "slug": "exploration",
          "language": "eng",
          "games_count": 8199,
          "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
        },
        {
          "id": 42,
          "name": "Great Soundtrack",
          "slug": "great-soundtrack",
          "language": "eng",
          "games_count": 3091,
          "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
        },
        {
          "id": 233,
          "name": "JRPG",
          "slug": "jrpg",
          "language": "eng",
          "games_count": 1788,
          "image_background": "https://media.rawg.io/media/screenshots/d2e/d2e117a863a87367d2589a7b0d6d4854_hFYCmjZ.jpg"
        },
        {
          "id": 120,
          "name": "Memes",
          "slug": "memes",
          "language": "eng",
          "games_count": 928,
          "image_background": "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg"
        },
        {
          "id": 186,
          "name": "Ninja",
          "slug": "ninja",
          "language": "eng",
          "games_count": 1463,
          "image_background": "https://media.rawg.io/media/games/c35/c354856af9151dc63844be4f9843d2c2.jpg"
        },
        {
          "id": 44,
          "name": "Nudity",
          "slug": "nudity",
          "language": "eng",
          "games_count": 2224,
          "image_background": "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg"
        },
        {
          "id": 36,
          "name": "Open World",
          "slug": "open-world",
          "language": "eng",
          "games_count": 3164,
          "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
        },
        {
          "id": 24,
          "name": "RPG",
          "slug": "rpg",
          "language": "eng",
          "games_count": 10649,
          "image_background": "https://media.rawg.io/media/games/91c/91c4f377c1e09755b60a0102c5252843.jpg"
        },
        {
          "id": 50,
          "name": "Sexual Content",
          "slug": "sexual-content",
          "language": "eng",
          "games_count": 1812,
          "image_background": "https://media.rawg.io/media/screenshots/49d/49dd1acb774d1d182e90b667d61b7155.jpg"
        },
        {
          "id": 31,
          "name": "Singleplayer",
          "slug": "singleplayer",
          "language": "eng",
          "games_count": 94283,
          "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
        },
        {
          "id": 15,
          "name": "Stealth",
          "slug": "stealth",
          "language": "eng",
          "games_count": 3278,
          "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
        },
        {
          "id": 118,
          "name": "Story Rich",
          "slug": "story-rich",
          "language": "eng",
          "games_count": 8086,
          "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
        },
        {
          "id": 149,
          "name": "Third Person",
          "slug": "third-person",
          "language": "eng",
          "games_count": 3195,
          "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
        },
        {
          "id": 34,
          "name": "Violent",
          "slug": "violent",
          "language": "eng",
          "games_count": 4087,
          "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
        },
        {
          "id": 478,
          "name": "3rd-Person Perspective",
          "slug": "3rd-person-perspective",
          "language": "eng",
          "games_count": 81,
          "image_background": "https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg"
        },
        {
          "id": 580,
          "name": "Souls-like",
          "slug": "souls-like",
          "language": "eng",
          "games_count": 230,
          "image_background": "https://media.rawg.io/media/games/b01/b01aa6b2d6d4f683203e9471a8b8d5b5.jpg"
        },
        {
          "id": 42392,
          "name": "Приключение",
          "slug": "prikliuchenie",
          "language": "rus",
          "games_count": 18381,
          "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
        },
        {
          "id": 42394,
          "name": "Глубокий сюжет",
          "slug": "glubokii-siuzhet",
          "language": "rus",
          "games_count": 3742,
          "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
        },
        {
          "id": 42396,
          "name": "Для одного игрока",
          "slug": "dlia-odnogo-igroka",
          "language": "rus",
          "games_count": 12690,
          "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
        },
        {
          "id": 42400,
          "name": "Атмосфера",
          "slug": "atmosfera",
          "language": "rus",
          "games_count": 4987,
          "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
        },
        {
          "id": 42401,
          "name": "Отличный саундтрек",
          "slug": "otlichnyi-saundtrek",
          "language": "rus",
          "games_count": 4323,
          "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
        },
        {
          "id": 42402,
          "name": "Насилие",
          "slug": "nasilie",
          "language": "rus",
          "games_count": 3367,
          "image_background": "https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg"
        },
        {
          "id": 42412,
          "name": "Ролевая игра",
          "slug": "rolevaia-igra",
          "language": "rus",
          "games_count": 8129,
          "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
        },
        {
          "id": 42417,
          "name": "Экшен",
          "slug": "ekshen",
          "language": "rus",
          "games_count": 20346,
          "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
        },
        {
          "id": 42420,
          "name": "Сложная",
          "slug": "slozhnaia",
          "language": "rus",
          "games_count": 3222,
          "image_background": "https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg"
        },
        {
          "id": 42439,
          "name": "Стелс",
          "slug": "stels",
          "language": "rus",
          "games_count": 670,
          "image_background": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg"
        },
        {
          "id": 42440,
          "name": "Ассассины",
          "slug": "assassiny",
          "language": "rus",
          "games_count": 88,
          "image_background": "https://media.rawg.io/media/games/c35/c354856af9151dc63844be4f9843d2c2.jpg"
        },
        {
          "id": 42441,
          "name": "От третьего лица",
          "slug": "ot-tretego-litsa",
          "language": "rus",
          "games_count": 1509,
          "image_background": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg"
        },
        {
          "id": 42442,
          "name": "Открытый мир",
          "slug": "otkrytyi-mir",
          "language": "rus",
          "games_count": 2277,
          "image_background": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg"
        },
        {
          "id": 42477,
          "name": "Мрачная",
          "slug": "mrachnaia",
          "language": "rus",
          "games_count": 1138,
          "image_background": "https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg"
        },
        {
          "id": 42487,
          "name": "Слэшер",
          "slug": "slesher",
          "language": "rus",
          "games_count": 718,
          "image_background": "https://media.rawg.io/media/games/8e6/8e699e91cf77c2060b6d515e2135b1b1.jpg"
        },
        {
          "id": 42491,
          "name": "Мясо",
          "slug": "miaso",
          "language": "rus",
          "games_count": 2802,
          "image_background": "https://media.rawg.io/media/games/d9f/d9f982e042df6263684ba1fdea3efc1c.jpg"
        },
        {
          "id": 42506,
          "name": "Тёмное фэнтези",
          "slug": "tiomnoe-fentezi",
          "language": "rus",
          "games_count": 571,
          "image_background": "https://media.rawg.io/media/games/dc0/dc0926d3f84ffbcc00968fe8a6f0aed3.jpg"
        },
        {
          "id": 42584,
          "name": "Ниндзя",
          "slug": "nindzia",
          "language": "rus",
          "games_count": 161,
          "image_background": "https://media.rawg.io/media/screenshots/4e5/4e5e71d53468bcf5d6686c46fec95d78.jpg"
        },
        {
          "id": 42592,
          "name": "Похожа на Dark Souls",
          "slug": "pokhozha-na-dark-souls",
          "language": "rus",
          "games_count": 164,
          "image_background": "https://media.rawg.io/media/games/29c/29c6c21cc0c78cff6f45d23631cc82f4.jpg"
        },
        {
          "id": 42618,
          "name": "Ритм-игра",
          "slug": "ritm-igra",
          "language": "rus",
          "games_count": 330,
          "image_background": "https://media.rawg.io/media/screenshots/411/411bc6b2c9397f7de82ece8835a84c43.jpg"
        }
      ],
      "esrb_rating": null,
      "user_game": null,
      "reviews_count": 1177,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
        {
          "id": -1,
          "image": "https://media.rawg.io/media/games/b1c/b1c27510817af1ad7d23494e07822777.jpg"
        },
        {
          "id": 805136,
          "image": "https://media.rawg.io/media/screenshots/198/198257c08163153e72a31bd61a6cd70b.jpg"
        },
        {
          "id": 805137,
          "image": "https://media.rawg.io/media/screenshots/9b3/9b3add83516f3737b8054c7469be282a.jpg"
        },
        {
          "id": 805138,
          "image": "https://media.rawg.io/media/screenshots/64d/64d71a80b0033e091b35c3948046605b.jpg"
        },
        {
          "id": 805139,
          "image": "https://media.rawg.io/media/screenshots/8d7/8d77b08c45b3232961b443677fa06a5f.jpg"
        },
        {
          "id": 805140,
          "image": "https://media.rawg.io/media/screenshots/a96/a96e960d87fc209488ef25da79b92a84.jpg"
        },
        {
          "id": 805141,
          "image": "https://media.rawg.io/media/screenshots/8ed/8edc8d65ba1c1ab001a3fb1bd6fdeeb6.jpg"
        }
      ],
      "parent_platforms": [
        {
          "platform": {
            "id": 1,
            "name": "PC",
            "slug": "pc"
          }
        },
        {
          "platform": {
            "id": 2,
            "name": "PlayStation",
            "slug": "playstation"
          }
        },
        {
          "platform": {
            "id": 3,
            "name": "Xbox",
            "slug": "xbox"
          }
        }
      ],
      "genres": [
        {
          "id": 4,
          "name": "Action",
          "slug": "action"
        },
        {
          "id": 5,
          "name": "RPG",
          "slug": "role-playing-games-rpg"
        }
      ]
    }
  ],
  "user_platforms": false
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
