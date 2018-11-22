import { Injectable, Component, OnInit, Input } from '@angular/core';
import { Http, Response } from  '@angular/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from '../../shared.service';
import { ToasterService } from '../../toaster.service';
import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-vendor-detail-form',
  templateUrl: './vendor-detail-form.component.html',
  styleUrls: ['./vendor-detail-form.component.css']
})
export class VendorDetailFormComponent implements OnInit {

	isVendorLoggedIn:boolean=false;
	isLoggedIn:boolean=false;

  	vendorLoginForm: FormGroup;
  	post:any;       
  	vendorEmail:string = '';
    vendorPassword:string = '';
    vendorEmailAlert:string = '';
	vendorpasswordAlert:string = '';
	
  	constructor(public sr: SharedService, private toasterService:ToasterService, private http: Http, private router: Router,private fb: FormBuilder) { 
		this.vendorLoginForm = fb.group({
			'vendorEmail' : new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(5)
			])),
			'vendorPassword' : [null, Validators.required],
			'api_type' : 'vendor_login'
		});
	}

	vendorLogin(data) {
		
		this.toasterService.Info('Please wait...');
		if (data.api_type == null) {
			data.api_type = 'vendor_login'
		}

		this.sr.vendorLogin(data).subscribe(res_data => {
			this.toasterService.Clear();
			if (res_data.result == 'error') {
				this.toasterService.Error(res_data.message);
			} else if (res_data.result == 'success') {
				this.toasterService.Success(res_data.message);
				this.vendorLoginForm.reset();
				localStorage.setItem('vendorToken', res_data.data.token);
				this.isVendorLoggedIn = true;
				if (localStorage.getItem('vendorToken') != null) {
					this.isVendorLoggedIn = true;
					this.router.navigate(['/vendor-dashboard/welcome']);
				}
			}
		});
	}

  	ngOnInit() {
	  	this.router.events.subscribe((evt) => {
	        if (!(evt instanceof NavigationEnd)) {
	            return;
	        }
	        window.scrollTo(0, 0)
	    });
  	}

}
