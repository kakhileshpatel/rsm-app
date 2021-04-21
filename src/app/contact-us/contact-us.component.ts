import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  senderName: string = 'Akhilesh Patel';
  senderEmail: string = 'kakhileshpatel@gmail.com';
  senderMessage: string = 'text message from akhilesh.';

  submitMessage: string = 'Contact Us from is not submitted.';
  isSent = false;

  constructor() { }

  ngOnInit(): void {
  }

  onContactUsFormSubmit() {
    console.log('Inside onContactUsFormSubmit');
    this.submitMessage = 'Now submitted';
    this.isSent = true;
    console.log(this.senderName);
    console.log(this.senderEmail);
    console.log(this.senderMessage);
  }
}
