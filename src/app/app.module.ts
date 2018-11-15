import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import {RouterModule, Routes} from '@angular/router'

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import{PostService} from './service/post.service'
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { PostFormComponent } from './post-form/post-form.component';

const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'createPost/:id', component:PostFormComponent },
  {path: 'createPost', component:PostFormComponent },
  {path: 'posts/:id', component: DetailsComponent },
  {path: 'posts', component: PostsComponent},
  {path: 'details/:id', component: DetailsComponent },
  {path: 'details', component: DetailsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    DetailsComponent,
    HomeComponent,
    PostFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
