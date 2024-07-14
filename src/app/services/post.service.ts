import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CommentModel } from '../models/comment.model';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../api-url.token';
import { PostModel } from '../models/post.models';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly http = inject(HttpClient);
  private apiUrl: string = inject(API_BASE_URL);

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.apiUrl}/posts`);
  }

  getPostById(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`${this.apiUrl}/posts/${id}`);
  }

  createPost(post: PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(`${this.apiUrl}/posts`, post);
  }

  updatePost(post: PostModel): Observable<PostModel> {
    return this.http.put<PostModel>(`${this.apiUrl}/posts/${post.id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/posts/${id}`);
  }
}
