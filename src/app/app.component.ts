import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsComponent } from "./posts/posts.component";
import { PostsService } from './services/posts.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostsComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts: Array<any> = []
  myForm = new FormGroup({
    post: new FormControl('',
      { validators:
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]
      }
    ),
    date: new FormControl(new Date())
  })

  constructor(private PostsService: PostsService){
    this.posts = PostsService.getPost();
  }

  submitPost(){
    this.PostsService.addPost(this.myForm)
  }
}
