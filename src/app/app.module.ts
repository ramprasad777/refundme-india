import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import 'rxjs/Rx';
import { ChartsModule } from 'ng2-charts';


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
import { AppRoutingModule } from './app-routing.module';
import { KnowYourRightsComponent } from './components/know-your-rights/know-your-rights.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SharedService } from './shared.service';
import { ToasterService } from './toaster.service';
import { AuthGuard } from './auth.guard';
import { VendorsComponent } from './components/vendors/vendors.component';
import { VendorDetailFormComponent } from './components/vendor-detail-form/vendor-detail-form.component';
import { VendorServicesComponent } from './components/vendor-services/vendor-services.component';
import { FlightEnquiryComponent } from './components/flight-enquiry/flight-enquiry.component';
import { VendorDashboardComponent } from './components/vendor-dashboard/vendor-dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { VendorDashboardWelcomeComponent } from './components/vendor-dashboard/vendor-dashboard-welcome/vendor-dashboard-welcome.component';
import { VendorDashboardServicesComponent } from './components/vendor-dashboard/vendor-dashboard-services/vendor-dashboard-services.component';
import { VendorDashboardManageBookingsComponent } from './components/vendor-dashboard/vendor-dashboard-manage-bookings/vendor-dashboard-manage-bookings.component';
import { VendorDashboardMyStaffComponent } from './components/vendor-dashboard/vendor-dashboard-my-staff/vendor-dashboard-my-staff.component';
import { VendorDashboardInvoicingComponent } from './components/vendor-dashboard/vendor-dashboard-invoicing/vendor-dashboard-invoicing.component';
import { VendorDashboardReportingComponent } from './components/vendor-dashboard/vendor-dashboard-reporting/vendor-dashboard-reporting.component';
import { VendorDashboardSystemSettingsComponent } from './components/vendor-dashboard/vendor-dashboard-system-settings/vendor-dashboard-system-settings.component';
import { VendorUpcomingBookingsComponent } from './components/vendor-dashboard/vendor-upcoming-bookings/vendor-upcoming-bookings.component';
import { VendorDashboardCompletedBookingsComponent } from './components/vendor-dashboard/vendor-dashboard-completed-bookings/vendor-dashboard-completed-bookings.component';
import { VendorDashboardHeaderComponent } from './components/vendor-dashboard/vendor-dashboard-header/vendor-dashboard-header.component';
import { VendorDashboardUserDetailComponent } from './components/vendor-dashboard/vendor-dashboard-user-detail/vendor-dashboard-user-detail.component';


const appRoutes: Routes = [

    {path: 'home', component:HomeComponent},
    {path:'know-your-rights',component:KnowYourRightsComponent },
    {path:'contact-us',component:ContactUsComponent },
    {path:'vendors',component:VendorsComponent },
    {
        path:'vendor-dashboard',
        canActivate : [AuthGuard],
        component:VendorDashboardComponent,
        children:[
            {path: 'welcome', component: VendorDashboardWelcomeComponent },
            {path: 'services', component: VendorDashboardServicesComponent },
            {
                path: 'manage-bookings',
                component: VendorDashboardManageBookingsComponent,
                /*children:[
                    {path: 'vendor-upcoming-bookings', component:VendorUpcomingBookingsComponent}
                ]*/
            },
            {path: 'vendor-upcoming-bookings', component:VendorUpcomingBookingsComponent},
            {path: 'vendor-completed-bookings', component:VendorDashboardCompletedBookingsComponent},
            {path: 'my-staff', component: VendorDashboardMyStaffComponent },
            {path: 'invoicing', component: VendorDashboardInvoicingComponent },
            {path: 'reporting', component: VendorDashboardReportingComponent },
            {path: 'system-settings', component: VendorDashboardSystemSettingsComponent },
            {path: 'user-detail', component: VendorDashboardUserDetailComponent },
            {path: '', redirectTo: '/vendor-dashboard/welcome', pathMatch:'full'}
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
    KnowYourRightsComponent,
    ContactUsComponent,
    VendorsComponent,
    VendorDetailFormComponent,
    VendorServicesComponent,
    FlightEnquiryComponent,
    PageNotFoundComponent,
    VendorDashboardComponent,
    VendorDashboardWelcomeComponent,
    VendorDashboardServicesComponent,
    VendorDashboardManageBookingsComponent,
    VendorDashboardMyStaffComponent,
    VendorDashboardInvoicingComponent,
    VendorDashboardReportingComponent,
    VendorDashboardSystemSettingsComponent,
    VendorUpcomingBookingsComponent,
    VendorDashboardCompletedBookingsComponent,
    VendorDashboardHeaderComponent,
    VendorDashboardUserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
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
    KnowYourRightsComponent,
    ContactUsComponent,
    VendorsComponent,
    VendorServicesComponent,
    FlightEnquiryComponent,
    PageNotFoundComponent,
    VendorDashboardComponent,
    VendorDashboardWelcomeComponent,
    VendorDashboardServicesComponent,
    VendorDashboardManageBookingsComponent,
    VendorDashboardMyStaffComponent,
    VendorDashboardInvoicingComponent,
    VendorDashboardReportingComponent,
    VendorDashboardSystemSettingsComponent,
    VendorUpcomingBookingsComponent,
    VendorDashboardCompletedBookingsComponent,
    VendorDashboardHeaderComponent,
    VendorDashboardUserDetailComponent
    ]
})
export class AppModule { }
