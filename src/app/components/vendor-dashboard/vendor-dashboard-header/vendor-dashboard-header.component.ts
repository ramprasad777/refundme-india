import { Component, OnInit, Renderer } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-vendor-dashboard-header',
  templateUrl: './vendor-dashboard-header.component.html',
  styleUrls: ['./vendor-dashboard-header.component.css']
})
export class VendorDashboardHeaderComponent implements OnInit {
  
  isVendorLoggedIn:boolean=false;
  isLoggedIn:boolean=false;

  constructor(private renderer: Renderer, public router: Router) { }

  ngOnInit() {
  }

  vendorlogout() {
    localStorage.removeItem('vendorToken');
    this.isVendorLoggedIn = false;
    this.renderer.setElementClass(document.body, 'vendorLoggedIn', false);
    this.router.navigate(['/']);

  }

}
