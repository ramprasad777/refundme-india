import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import 'rxjs/Rx';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { EnquiryFormComponent } from './components/enquiry-form/enquiry-form.component';
import { SliderServicesComponent } from './components/slider-services/slider-services.component';
import { OurServicesHomeComponent } from './components/our-services-home/our-services-home.component';
import { AboutUsHomeComponent } from './components/about-us-home/about-us-home.component';
import { OurPartnersHomeComponent } from './components/our-partners-home/our-partners-home.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { SubscribeNewsletterComponent } from './components/subscribe-newsletter/subscribe-newsletter.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { PressReleaseComponent } from './components/press-release/press-release.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { AppRoutingModule } from './app-routing.module';
import { KnowYourRightsComponent } from './components/know-your-rights/know-your-rights.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SharedService } from './shared.service';
import { ToasterService } from './toaster.service';
import { AuthGuard } from './auth.guard';
import { VendorsComponent } from './components/vendors/vendors.component';
import { VendorDetailFormComponent } from './components/vendor-detail-form/vendor-detail-form.component';
import { VenderServicesComponent } from './components/vender-services/vender-services.component';
import { FlightEnquiryComponent } from './components/flight-enquiry/flight-enquiry.component';
import { VenderDashboardComponent } from './components/vender-dashboard/vender-dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { VenderDashboardWelcomeComponent } from './components/vender-dashboard/vender-dashboard-welcome/vender-dashboard-welcome.component';
import { VenderDashboardServicesComponent } from './components/vender-dashboard/vender-dashboard-services/vender-dashboard-services.component';
import { VenderDashboardManageBookingsComponent } from './components/vender-dashboard/vender-dashboard-manage-bookings/vender-dashboard-manage-bookings.component';
import { VenderDashboardMyStaffComponent } from './components/vender-dashboard/vender-dashboard-my-staff/vender-dashboard-my-staff.component';
import { VenderDashboardInvoicingComponent } from './components/vender-dashboard/vender-dashboard-invoicing/vender-dashboard-invoicing.component';
import { VenderDashboardReportingComponent } from './components/vender-dashboard/vender-dashboard-reporting/vender-dashboard-reporting.component';
import { VenderDashboardSystemSettingsComponent } from './components/vender-dashboard/vender-dashboard-system-settings/vender-dashboard-system-settings.component';


const appRoutes: Routes = [

    {path: 'home', component:HomeComponent},
    {path:'Login-Signup',component:LoginSignupComponent },
    {path:'know-your-rights',component:KnowYourRightsComponent },
    {path:'contact-us',component:ContactUsComponent },
    {path:'venders',component:VendorsComponent },
    {
        path:'vender-dashboard',
        canActivate : [AuthGuard],
        component:VenderDashboardComponent,
        children:[
            {path: 'welcome', component: VenderDashboardWelcomeComponent },
            {path: 'services', component: VenderDashboardServicesComponent },
            {path: 'manage-bookings', component: VenderDashboardManageBookingsComponent },
            {path: 'my-staff', component: VenderDashboardMyStaffComponent },
            {path: 'invoicing', component: VenderDashboardInvoicingComponent },
            {path: 'reporting', component: VenderDashboardReportingComponent },
            {path: 'system-settings', component: VenderDashboardSystemSettingsComponent },
            {path: '', redirectTo: '/vender-dashboard/welcome', pathMatch:'full'}
        ]
    },
    {path: '', redirectTo: '/home', pathMatch:'full'},
    {path: '**', component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SliderComponent,
    EnquiryFormComponent,
    SliderServicesComponent,
    OurServicesHomeComponent,
    AboutUsHomeComponent,
    OurPartnersHomeComponent,
    DownloadAppComponent,
    SubscribeNewsletterComponent,
    TestimonialComponent,
    PressReleaseComponent,
    MainFooterComponent,
    LoginSignupComponent,
    KnowYourRightsComponent,
    ContactUsComponent,
    VendorsComponent,
    VendorDetailFormComponent,
    VenderServicesComponent,
    FlightEnquiryComponent,
    PageNotFoundComponent,
    VenderDashboardComponent,
    VenderDashboardWelcomeComponent,
    VenderDashboardServicesComponent,
    VenderDashboardManageBookingsComponent,
    VenderDashboardMyStaffComponent,
    VenderDashboardInvoicingComponent,
    VenderDashboardReportingComponent,
    VenderDashboardSystemSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SharedService,ToasterService],
  bootstrap: [AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SliderComponent,
    EnquiryFormComponent,
    SliderServicesComponent,
    OurServicesHomeComponent,
    AboutUsHomeComponent,
    OurPartnersHomeComponent,
    DownloadAppComponent,
    SubscribeNewsletterComponent,
    TestimonialComponent,
    PressReleaseComponent,
    MainFooterComponent,
    LoginSignupComponent,
    KnowYourRightsComponent,
    ContactUsComponent,
    VendorsComponent,
    VenderServicesComponent,
    FlightEnquiryComponent,
    PageNotFoundComponent,
    VenderDashboardComponent,
    VenderDashboardWelcomeComponent,
    VenderDashboardServicesComponent,
    VenderDashboardManageBookingsComponent,
    VenderDashboardMyStaffComponent,
    VenderDashboardInvoicingComponent,
    VenderDashboardReportingComponent,
    VenderDashboardSystemSettingsComponent
    ]
})
export class AppModule { }
