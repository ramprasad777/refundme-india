import { Injectable, Component, OnInit, Input } from '@angular/core';
import { Http, Response } from  '@angular/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from '../../shared.service';
import { ToasterService } from '../../toaster.service';
import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-flight-enquiry',
  templateUrl: './flight-enquiry.component.html',
  styleUrls: ['./flight-enquiry.component.css']
})
export class FlightEnquiryComponent implements OnInit {

	flightEnquiryForm: FormGroup;
  	post:any;       
  	depatureAirport:string = '';
    arrivalAirport:string = '';
    flightNumber:string = '';
    flightDate:string = '';
    depatureAirportAlert:string = '';
	arrivalAirportAlert:string = '';
	flightNumberAlert:string = '';
	flightDateAlert:string = '';
	isLoggedIn = false;

  	constructor(public sr: SharedService, private toasterService:ToasterService, private http: Http, private router: Router,private fb: FormBuilder) { 
		this.flightEnquiryForm = fb.group({
			'depatureAirport' : new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(5)
			])),
			'arrivalAirport' : new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(5)
			])),
			'flightNumber' : new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(5)
			])),
			'flightDate' : new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(5)
			])),
			'api_type' : 'flight_enquiry'
		});
	}

	flightEnquiry(data, service) {
		this.toasterService.Info('Please wait...');
		if (data.api_type == null) {
			data.api_type = 'flightEnquiryForm'
		}

		this.sr.flightEnquiry(data).subscribe(res_data => {
			this.toasterService.Clear();
			if (res_data.result == 'error') {
				this.toasterService.Error(res_data.message);
			} else if (res_data.result == 'success') {
				this.toasterService.Success(res_data.message);
				this.flightEnquiryForm.reset();
				document.getElementById('modalLogin').click();
				localStorage.setItem('userToken', res_data.data.token);
				this.isLoggedIn = true;
				if (localStorage.getItem('userToken') != null) {
					this.isLoggedIn = true;
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
