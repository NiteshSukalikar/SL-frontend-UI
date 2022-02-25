import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-page',
  templateUrl: './accordion-page.component.html',
  styleUrls: ['./accordion-page.component.scss'],
})
export class AccordionPageComponent implements OnInit {
  tempItem = [0, 0, 0, 0];
  oneAtATime = true;
  initialOpen = true;
  constructor() {}

  ngOnInit(): void {}
}
