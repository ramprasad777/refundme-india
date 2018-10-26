import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { KnowYourRightsComponent } from './components/know-your-rights/know-your-rights.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SharedService } from './shared.service';
import { ToasterService } from './toaster.service';
import { AuthGuard } from './auth.guard';
import 'rxjs/Rx';



const appRoutes: Routes = [
  {path: 'home', component:HomeComponent},
  {path:'Login-Signup',component:LoginSignupComponent },
  {path:'know-your-rights',component:KnowYourRightsComponent },
  {path:'contact-us',component:ContactUsComponent },
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: '**', redirectTo: '/home', pathMatch:'full'}
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
    ContactUsComponent
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
    ContactUsComponent
    ]
})
export class AppModule { }
