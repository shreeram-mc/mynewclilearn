import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';      // Add this
import { Router } from '@angular/router';             // Add this


import { DataService } from '../data.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goals: any;
  paramId:number;

  constructor(private route: ActivatedRoute, private router: Router, private _data:DataService) { 
    this.route.params.subscribe(res => this.paramId=res.id);
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome() {
    this.goals.push(Math.random());
    this._data.changeGoal(this.goals);
   // this.router.navigate(['']);
  }

}
