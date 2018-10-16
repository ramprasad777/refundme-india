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
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {path: 'home', component:HomeComponent},
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
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
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
    MainFooterComponent
    ]
})
export class AppModule { }
