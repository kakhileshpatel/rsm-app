import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  nameDr1: string = 'Rahul';
  nameDr2: string = 'Sunil';
  nameDr3: string = 'Mahendra';


  constructor() { }

  ngOnInit(): void {
  }

  

}
