import { Component, OnInit } from '@angular/core';
import {PostService} from '../service/post.service'

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
    .subscribe(response=>{
      this.posts = response.json();
    }, error =>{
      alert("Server error");
      console.log(error);
    });
  }

  createPost(input:HTMLInputElement){
    let post = {title: input.value};
    input.value = ''
    this.postService.createPosts(post)
    .subscribe(response =>{
      post['id'] = response.json().id;   
      this.posts.splice(0,0, post)   ;
    },
  
    (error:Response) =>{
      if(error.status === 400){
        // this.form.setErrors(error.json())
      }else{
        alert("An unexpected error occurred");
      console.log(error);
      }
    }
  )

  }

  updatePost(post){
    this.postService.updatePosts(post)
    .subscribe(response =>{
      console.log(response.json());
      
    },
    (error:Response) =>{
      if(error.status === 400){
        // this.form.setErrors(error.json())
      }else{
        alert("An unexpected error occurred");
      console.log(error);
      }
    }
  )
  }


  deletePost(post){
    this.postService.deletePosts(post.id)
    .subscribe(response =>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1)
    },
    
    (error:Response) =>{
      if(error.status === 404){
        alert('This post has already been deleted')
      }else{
        alert("An unexpected error occurred");
      console.log(error);
      }
    }
  )
  }

  // detailPost(post){
  //   this.postService.detailPost(post.id);
  // }

}
