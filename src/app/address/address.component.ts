import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  GET_ADDRESS_URL: string = 'https://run.mocky.io/v3/486a032a-4637-4768-aabb-0c1698632a4b';

  addresses: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAddresses();
  }

  fetchAddresses() {
    this.http.get(this.GET_ADDRESS_URL).subscribe(addresses => {
      this.addresses = addresses;
      console.log(this.addresses);
    });
  }
}
