import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vr-exp',
  templateUrl: './vr-exp.component.html',
  styleUrls: ['./vr-exp.component.scss']
})
export class VRExpComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  public goHome() : void {
    this.router.navigate(['games']);
  }

}
