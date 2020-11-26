import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPVGComponent } from './list-pvg/list-pvg.component';
import { ListPVGItemComponent } from './list-pvg-item/list-pvg-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPVGComponent,
    ListPVGItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
