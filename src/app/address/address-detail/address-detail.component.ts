import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAddresses();
  }

  fetchAddresses() {
    this.http.get('https://run.mocky.io/v3/94a9011d-df47-46fd-982e-a32286369f98').subscribe(address => {
      console.log(address);
    });
  }
}
