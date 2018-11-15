import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:any[];
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  
  // createPost(input:HTMLInputElement){
  //   let post = {title: input.value};
  //   input.value = ''
  //   this.postService.createPosts(post)
  //   .subscribe(response =>{
  //     post['id'] = response.json().id;   
  //     this.posts.splice(0,0, post)   ;
  //   },
  
  //   (error:Response) =>{
  //     if(error.status === 400){
  //       // this.form.setErrors(error.json())
  //     }else{
  //       alert("An unexpected error occurred");
  //     console.log(error);
  //     }
  //   }
  // )

  // }

}
