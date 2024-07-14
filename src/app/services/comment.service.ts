import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CommentModel } from '../models/comment.model';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../api-url.token';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private readonly http = inject(HttpClient);
  private apiUrl: string = inject(API_BASE_URL);

  getComments(): Observable<CommentModel[]> {
    console.log('${this.apiUrl}/comments');
    return this.http.get<CommentModel[]>(`${this.apiUrl}/comments`);
  }

  getCommentById(id: number): Observable<CommentModel> {
    return this.http.get<CommentModel>(`${this.apiUrl}/comments/${id}`);
  }

  getCommentsByPostId(postId: number): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(
      `${this.apiUrl}/posts/${postId}/comments`
    );
  }

  createComment(comment: CommentModel): Observable<CommentModel> {
    return this.http.post<CommentModel>(`${this.apiUrl}/comments`, comment);
  }

  updateComment(comment: CommentModel): Observable<CommentModel> {
    return this.http.put<CommentModel>(
      `${this.apiUrl}/comments/${comment.id}`,
      comment
    );
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/comments/${id}`);
  }
}
