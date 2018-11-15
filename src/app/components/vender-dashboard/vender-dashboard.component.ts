import { Component, OnInit, Renderer } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-vender-dashboard',
  templateUrl: './vender-dashboard.component.html',
  styleUrls: ['./vender-dashboard.component.css']
})
export class VenderDashboardComponent implements OnInit {
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
