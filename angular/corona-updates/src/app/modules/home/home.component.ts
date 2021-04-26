import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  queries = [
    { label: 'Oxygen Cylinders', value: 'OC', active: true },
    { label: 'Hospital Beds', value: 'HB', active: true },
    { label: 'Vaccine', value: 'VC', active: true },
    { label: 'Plasma Donors', value: 'PD', active: true }
  ];

  state = 1;
  constructor() { }

  ngOnInit(): void {
    //this.searchQuery();
  }

  serachAgain(){
    if (this.state == 0) {
      this.state = 1;
    }
  }

  searchQuery() {
    if (this.state == 1) {
      this.state = 0;
    }
  }

}
