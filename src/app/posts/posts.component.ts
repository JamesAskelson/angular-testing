import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  @Input() posts: any;


  constructor(private PostService: PostsService){

  }

  deletePost(id: number){
    this.PostService.deletePost(id)
  }
}
