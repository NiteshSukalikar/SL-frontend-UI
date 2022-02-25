import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-block',
  templateUrl: './comment-block.component.html',
  styleUrls: ['./comment-block.component.scss'],
})
export class CommentBlockComponent implements OnInit {
  tempItem = [0, 0, 0, 0];
  constructor() {}

  ngOnInit(): void {}
}
