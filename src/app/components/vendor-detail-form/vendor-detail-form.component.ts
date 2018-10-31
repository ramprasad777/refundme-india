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

  	venderLoginForm: FormGroup;
  	post:any;       
  	venderEmail:string = '';
    venderPassword:string = '';
    venderEmailAlert:string = 'Username required.';
	venderpasswordAlert:string = 'Password required.';
	isVendorLoggedIn = false;

  	constructor(public sr: SharedService, private toasterService:ToasterService, private http: Http, private router: Router,private fb: FormBuilder) { 
		this.venderLoginForm = fb.group({
			'venderEmail' : new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(5)
			])),
			'venderPassword' : [null, Validators.required],
			'api_type' : 'vendor_login'
		});
	}

	venderLogin(data, service) {
		
		this.toasterService.Info('Please wait...');
		if (data.api_type == null) {
			data.api_type = 'vendor_login'
		}

		this.sr.venderLogin(data).subscribe(res_data => {
			this.toasterService.Clear();
			if (res_data.result == 'error') {
				this.toasterService.Error(res_data.message);
			} else if (res_data.result == 'success') {
				this.toasterService.Success(res_data.message);
				this.venderLoginForm.reset();
				localStorage.setItem('vendorToken', res_data.data.token);
				this.isVendorLoggedIn = true;
				if (localStorage.getItem('vendorToken') != null) {
					this.isVendorLoggedIn = true;
					this.router.navigate(['/vender-dashboard']);
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
