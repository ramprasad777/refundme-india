import { Injectable, Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-contact-us',
	templateUrl: './contact-us.component.html',
	styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

	rForm: FormGroup;
	post:any; 
	message:string = '';
	fname:string = '';
	lname:string = '';
	email:string = '';
	phone:string = '';
	jobTitle:string = '';
	organization:string = '';
	captcha:string = '';
	titleAlert:string = 'This field is required.';
	
	constructor(private fb: FormBuilder) {
		this.rForm = fb.group({
			'fname' : [null, Validators.required],
			'lname' : [null, Validators.required],
			'email' : [null, Validators.required],
			'phone' : [null, Validators.required],
			'jobTitle' : [null, Validators.required],
			'organization' : [null, Validators.required],
			'message' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
			'captcha' : ''
		});
	}
	
	resolved(captchaResponse: string) {
		
        console.log(`Resolved captcha with response ${captchaResponse}:`);
		
    }
	
	saveContactUs(data, service){
		console.log(data);
	}
	
	ngOnInit() {
	}
}

