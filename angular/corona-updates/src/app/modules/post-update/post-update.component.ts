import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.scss']
})
export class PostUpdateComponent implements OnInit {

  queries = [
    { label: 'Oxygen Cylinders', value: 'OC', active: true },
    { label: 'Hospital Beds', value: 'HB', active: true },
    { label: 'Vaccine', value: 'VC', active: true },
    { label: 'Plasma Donors', value: 'PD', active: true }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  postUpdate() {
  }

}
