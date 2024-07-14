import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentService } from './services/comment.service';
import { CommentModel } from './models/comment.model';
import { PostModel } from './models/post.models';
import { PostService } from './services/post.service';

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
  private readonly postsService = inject(PostService);

  comments: CommentModel[] = [];
  posts: PostModel[] = [];

  constructor() {
    console.log('11');
  }

  ngOnInit(): void {
    this.commentService
      .getComments()
      .subscribe((comments) => (this.comments = comments));

    this.postsService.getPosts().subscribe((posts) => (this.posts = posts));

    console.log(this.posts);
  }
}
