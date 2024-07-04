import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

const httphead = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  //Guardar valor en localstorage: localStorage.setItem('token', token)

  private obtenerToken():string{
    return localStorage.getItem('token') || ''
  }

  private cabeceraMensaje():HttpHeaders{
    return new HttpHeaders({
      'Authorization': `Bearer ${this.obtenerToken()}`,
      'Content-Type': 'application/json'
    })
  }


  

  getAllPosts():Observable<Post[]>{    
    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getAllPostsToken():Observable<any>{
    const headers = this.cabeceraMensaje();
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts", {headers});
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
