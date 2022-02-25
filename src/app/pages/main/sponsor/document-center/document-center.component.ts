import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-center',
  templateUrl: './document-center.component.html',
  styleUrls: ['./document-center.component.scss'],
})
export class DocumentCenterComponent implements OnInit {
  oneAtATime = true;
  initialOpen = true;
  tempItem = [0, 0, 0, 0, 0];
  constructor() {}

  ngOnInit(): void {}
}
