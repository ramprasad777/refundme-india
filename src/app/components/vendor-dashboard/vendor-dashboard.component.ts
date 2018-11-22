import { Component, OnInit, Renderer } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {
  isVendorLoggedIn:boolean=false;
  
    
  constructor(private renderer: Renderer, public router: Router) { 
    if (localStorage.getItem('vendorToken') != null) {
      this.isVendorLoggedIn = true;
      this.renderer.setElementClass(document.body, 'vendorLoggedIn', true);
      
    }
  }

  ngOnInit() {
  }

}
