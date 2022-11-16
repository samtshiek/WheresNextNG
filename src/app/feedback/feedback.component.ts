import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formatLabel(value: number) {
    if (value >= 5) {
      
    }

    return value;
  }
}


