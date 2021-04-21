import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarScrollerComponent } from './navbar-scroller/navbar-scroller.component';
import { BrandComponent } from './brand/brand.component';
import { BodyPart1Component } from './body-part1/body-part1.component';
import { BodyPart2Component } from './body-part2/body-part2.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BodyComponent } from './body/body.component';
import { HeadlineComponent } from './body/headline/headline.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { from } from 'rxjs';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { AddressComponent } from './address/address.component';
import { AddressDetailComponent } from './address/address-detail/address-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarScrollerComponent,
    BrandComponent,
    BodyPart1Component,
    BodyPart2Component,
    CarouselComponent,
    BodyComponent,
    HeadlineComponent,
    ContactUsComponent,
    JumbotronComponent,
    AddressComponent,
    AddressDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
