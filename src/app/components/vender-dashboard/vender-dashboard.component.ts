import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-vender-dashboard',
  templateUrl: './vender-dashboard.component.html',
  styleUrls: ['./vender-dashboard.component.css']
})
export class VenderDashboardComponent implements OnInit {
  env = environment;
  constructor(public router: Router) { }

  ngOnInit() {
  }

}
