import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-vender-dashboard-header',
  templateUrl: './vender-dashboard-header.component.html',
  styleUrls: ['./vender-dashboard-header.component.css']
})
export class VenderDashboardHeaderComponent implements OnInit {
  env = environment;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  vendorlogout() {
    localStorage.removeItem('vendorToken');
    this.env.isVendorLoggedIn = false;
    this.router.navigate(['/']);

  }

}
