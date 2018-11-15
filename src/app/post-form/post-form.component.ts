import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../service/post.service';
import { ActivatedRoute } from '@angular/router';

export class PostObject {
  constructor(public id: number, public title: string, public body: string, public userId: number) { }
}

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  id: string = "";
  public buttonName:string="";

  postFormObj: PostObject = {
    id: 0,
    title: "",
    body: '',
    userId: 0

  }
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
  this.route.paramMap
    .subscribe(params => {
      this.id = params.get('id');
    });

if(this.id != null)
{
  this.buttonName="Update";

  this.postService.getPostById(this.id)
  .subscribe((res) => {
    this.postFormObj.id = res.json().id;
    this.postFormObj.title = res.json().title;
    this.postFormObj.body = res.json().body;
    this.postFormObj.userId = res.json().userId;
  });
}
else{
  this.buttonName="Save";
}
  
}

  sendData(formData: NgForm) {
    let postObj = new PostObject(formData.value.id, formData.value.title, formData.value.body, formData.value.userId);

    if (this.id != null) {
      //call update method
      this.postService.updatePosts(postObj).subscribe(res => {
        console.log(res);
        alert("Update "+res.statusText);
      })
    }
    else {
      //call insert method
      this.postService.createPosts(postObj).subscribe(res => {
        console.log(res);
        alert(res.statusText);
      })
    }



  }

}
