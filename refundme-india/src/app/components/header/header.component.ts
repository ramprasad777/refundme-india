import { Injectable, Component, OnInit, Input } from '@angular/core';
import { Http, Response } from  '@angular/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private apiurl = 'https://staging.quantumsoftech.in/india_app/api/';
	
	signupForm: FormGroup;
	post2:any;       
  	Username:string = '';
    Email:string = '';
    Password:string = 'Password required.';
    UsernameAlert:string = 'Username required & minimum length is 5.';
    EmailAlert:string = 'Email required.';
    PasswordAlert:string = 'Password required.';
    ConfirmPasswordAlert:string = 'Confirm password required.';
	TermsAlert = 'Please accept our terms & conditions.';

	loginForm: FormGroup;
  	post:any;       
  	email:string = '';
    password:string = '';
    emailAlert:string = 'Email required.';
	passwordAlert:string = 'Password required.';

  	constructor(private fb: FormBuilder, private http:Http) { 
		this.loginForm = fb.group({
			'email' : new FormControl('', Validators.compose([
				Validators.required,
				Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
			])),
			'password' : [null, Validators.required],
			'rememberMe' : '',
			'type' : 'login'
		});

		this.signupForm = fb.group({
			'Username' : new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(5)
			])),			
			'Email' : new FormControl('', Validators.compose([
				Validators.required,
				Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
			])),
			'Password' : [null, Validators.required],
			'ConfirmPassword' : [null, Validators.required],
			'Terms' : [null, Validators.required],
			'type' : 'registration'
		});
	}
	
	/* checkUsername( $event ){
		var val		=	$event.target.value;
		var type	=	'check_username';
		var data	=	{'value':val, 'type':type};
		
		this.http.post(this.apiurl,JSON.stringify(data)).subscribe(
			res => {
				console.log(res);
				UsernameAlert:string = 'Username required & minimum length is 5.';
			},
			err => {
				console.log("Error occured");
			}
		);
	} */
	
	registration(data, service) {
		this.http.post(this.apiurl,JSON.stringify(data)).subscribe(
			res => {
				console.log(res);
			},
			err => {
				console.log("Error occured");
			}
		);
	}
	
	login(data, service){
		this.http.post(this.apiurl,JSON.stringify(data)).subscribe(
			res => {
				console.log(res);
			},
			err => {
				console.log("Error occured");
			}
		);
	}

  ngOnInit() {
  }

}
