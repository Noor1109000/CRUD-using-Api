import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  private detailUrl = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: Http) { }


  getPosts(){
   return this.http.get(this.url);

  }

  getPostById(id:string){
    return this.http.get(this.url+"/"+id);
   }

  createPosts(post){
    let body = {
      "userId": post.userId,
      "title":post.title ,
      "body": post.body
    }
   return this.http.post(this.url, JSON.stringify(body));
  }

  updatePosts(post){
  //  return this.http.patch(this.url+'/'+post.id, {isRead: true})
  return this.http.put(this.url+'/'+post.id,JSON.stringify(post))

  }

  deletePosts(id){
    return this.http.delete(this.url+'/'+id);

  }

 

}
