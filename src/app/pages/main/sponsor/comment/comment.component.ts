import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  item = [0, 0, 0, 0, 0];
  constructor() {}

  ngOnInit(): void {}
}
