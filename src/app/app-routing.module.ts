import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPVGComponent } from './list-pvg/list-pvg.component';
import { SingleGameComponent } from './single-game/single-game.component';
import { VRExpComponent } from './vr-exp/vr-exp.component';

const routes: Routes = [
  { 
    path: 'games', 
    component: ListPVGComponent 
  },
  { 
    path: 'games/:id', 
    component: SingleGameComponent
  },
  { 
    path: 'VRexp', 
    component: VRExpComponent 
  },  
  { 
    path: '**', 
    redirectTo : 'games',
    pathMatch : 'full'
  }    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
