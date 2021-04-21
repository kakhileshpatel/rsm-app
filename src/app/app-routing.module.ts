import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BodyComponent } from './body/body.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'address', component: AddressComponent },
  { path: 'contactus', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
