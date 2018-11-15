import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { PostObject } from '../post-form/post-form.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  details:any[];
  detailPosts: PostObject = {
    id: 0,
    title: "",
    body: '',
    userId: 0

  }

  id:string ="";
  detailsId = "";
  constructor(private route: ActivatedRoute, private postService: PostService, private http: Http) { }

  ngOnInit(){
    this.route.paramMap
    .subscribe(params =>{
      this.id = params.get('id');
    })
    // console.log(this.id)

    this.postService.getPostById(this.id)
      .subscribe((res)=>{
        console.log(res.json());
        // this.detailPosts  = res.json();
        this.detailPosts.id = res.json().id;
        this.detailPosts.title = res.json().title;
        this.detailPosts.body = res.json().body;
        this.detailPosts.userId = res.json().userId;
        })

        this.detailsId= this.id
  }


  deleteDetails(id){
    console.log(id);
    
    this.postService.deletePosts(id)
    .subscribe(params =>{
      console.log(params.status);
      let status = params.status;
      alert("Delete ok "+status)
      
    });
  } 

}
