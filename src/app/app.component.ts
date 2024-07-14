import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentService } from './services/comment.service';
import { CommentModel } from './models/comment.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ToDo';
  private readonly commentService = inject(CommentService);
  comments: CommentModel[] = [];

  constructor() {
    console.log('11');
  }

  ngOnInit(): void {
    this.commentService
      .getComments()
      .subscribe((comments) => (this.comments = comments));

    console.log(this.comments);
  }
}
