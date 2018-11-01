import { Injectable, Component, OnInit, Input } from '@angular/core';
import { Http, Response } from  '@angular/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../../../environments/environment';
import { SharedService } from '../../shared.service';
import { ToasterService } from '../../toaster.service';
import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	env = environment;
	
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

  	constructor(public sr: SharedService, private toasterService:ToasterService, private http: Http, private router: Router,private fb: FormBuilder) { 
		this.loginForm = fb.group({
			'email' : new FormControl('', Validators.compose([
				Validators.required,
				Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
			])),
			'password' : [null, Validators.required],
			'rememberMe' : '',
			'api_type' : 'login'
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
			'api_type' : 'registration'
		});
	}
	
	registration(data, service) {
		this.toasterService.Clear();
		if (data.api_type == null) {
			data.api_type = 'registration'
		}
		this.sr.register(data).subscribe(res_data => {
			this.toasterService.Clear();

			if (res_data.result == 'error') {
				this.toasterService.Error(res_data.message);
			} else if (res_data.result == 'success') {
				this.toasterService.Success(res_data.message);
				this.signupForm.reset();
				document.getElementById('modalLogin').click();
			}

		});
	}

	login(data, service) {
		this.toasterService.Info('Please wait...');
		if (data.api_type == null) {
			data.api_type = 'login'
		}

		this.sr.login(data).subscribe(res_data => {
			this.toasterService.Clear();
			if (res_data.result == 'error') {
				this.toasterService.Error(res_data.message);
			} else if (res_data.result == 'success') {
				this.toasterService.Success(res_data.message);
				this.loginForm.reset();
				document.getElementById('modalLogin').click();
				localStorage.setItem('userToken', res_data.data.token);
				this.env.isLoggedIn = true;
				if (localStorage.getItem('userToken') != null) {
					this.env.isLoggedIn = true;
				}
			}

		});
	}

	logout() {
		localStorage.removeItem('userToken');
		this.env.isLoggedIn = true;
		this.router.navigate(['/']);
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
