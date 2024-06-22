import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts():Observable<Post[]>{
    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getPostById(id: number): Observable<Post>{
    return this.httpClient.get<Post>("https://jsonplaceholder.typicode.com/posts/"+id);
  }

  createPost(post: Post):Observable<Post>{
    return this.httpClient.post<Post>("https://jsonplaceholder.typicode.com/posts", post);    
  }

  updatePost(post: Post):Observable<Post>{
    return this.httpClient.put<Post>("https://jsonplaceholder.typicode.com/posts/"+post.id,
      post)
  }


}
