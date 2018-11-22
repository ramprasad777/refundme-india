import { Injectable } from '@angular/core';

import {
  Http,
  Headers,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  RequestMethod,
  Request,
  Connection,
  ConnectionBackend
} from '@angular/http';


import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/Rx'
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public apiurl_main = 'https://staging.quantumsoftech.in/india_app/api/';

  constructor(private http: Http, private toaster: ToasterService) { }

  /* ######################### Login ######################### */
  login(param) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiurl_main, param, options).map(
      res => {
        return res.json();
      });
  }


  /* ######################### Registration ######################### */

  register(param) {
    console.log('inside register shared service');
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiurl_main, param, options).map(
      res => {
        return res.json();
      });
  }

  /* ######################### Getting User Details ######################### */

  getUserDetails() {

    if (localStorage.getItem("userToken") != null) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Authorization', localStorage.getItem("userToken"));
      let options = new RequestOptions({ headers: headers });
      let param = {
        "api_type": "getUserDetails"
      }
      return this.http.post(this.apiurl_main, param, options).map(
        res => {
          return res.json();
        });
    } else {
      this.toaster.Warning('Please login first!');
    }
  }
  /* ######################### Initiating Payment  ######################### */

  initiate_payment(param) {
    if (localStorage.getItem("userToken") != null) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Authorization', localStorage.getItem("userToken"));
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.apiurl_main, param, options).map(
        res => {
          return res.json();
        });
    } else {
      this.toaster.Warning('Please login first!');
    }
  }

  /* ########### Payment from creation and redirecting to payu server ######### */

  submit_pay_form(obj, url) {

    var mapForm = document.createElement("form");
    mapForm.method = "POST"; // or "post" if appropriate
    mapForm.action = url;
    Object.keys(obj).forEach(function (param) {
      var mapInput = document.createElement("input");
      mapInput.type = "hidden";
      mapInput.name = param;
      mapInput.setAttribute("value", obj[param]);
      if (mapInput.name == 'surl' || mapInput.name == 'furl' || mapInput.name == 'service_provider') {
        mapInput.setAttribute("size", "64");
      }
      mapForm.appendChild(mapInput);
    });
    document.body.appendChild(mapForm);
    mapForm.submit();

  }

  /* ######################### Vendors List  ######################### */

    getVendors() {

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    let param = {
      "api_type": "vendorList"
    }

    return this.http.post(this.apiurl_main, param, options).map(
      res => {
        return res.json();
      });


  }

  /* ######################### Blog List  ######################### */


  getBlog() {
    console.log('calling get blog');
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });
    console.log(this.apiurl_main);
    return this.http.post(this.apiurl_main, {
      "api_type": "news_details",
      "news_id": "5b98e6c0813f5231995bb628",
      "news_slug": "",
      "type": "news",
      "user_id": "5ba09f2e813f52106e32d1d2"
    }, options).map(
      res => {
        return res.json();
      });
  }


  /* ######################### Flight Enquiry Form ######################### */

  flightEnquiry(param) {
    console.log('inside flightEnquiryForm shared service');
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiurl_main, param, options).map(
      res => {
        return res.json();
      });
  }


  /* ######################### Vendor Login Form ######################### */

  vendorLogin(param) {
    console.log('inside vendorLogin shared service');
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiurl_main, param, options).map(
      res => {
        return res.json();
      });
  }
}
