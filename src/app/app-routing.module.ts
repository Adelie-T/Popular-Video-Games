import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPVGComponent } from './list-pvg/list-pvg.component';
import { VRExpComponent } from './vr-exp/vr-exp.component';

const routes: Routes = [
  { 
    path: 'games', 
    component: ListPVGComponent 
  },
  { 
    path: 'VRexp', 
    component: VRExpComponent 
  },  
  { 
    path: '**', 
    redirectTo : 'games',
    pathMatch : 'full'
  },  
  { 
    path: 'games/:id', 
    component: ListPVGComponent
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
