import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPVGComponent } from './list-pvg/list-pvg.component';
import { ListPVGItemComponent } from './list-pvg-item/list-pvg-item.component';
import { HttpClientModule} from '@angular/common/http';

import { GameService } from './core/services/game.service';
import { VRExpComponent } from './vr-exp/vr-exp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingleGameComponent } from './single-game/single-game.component';



@NgModule({
  declarations: [
    AppComponent,
    ListPVGComponent,
    ListPVGItemComponent,
    VRExpComponent,
    SingleGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
