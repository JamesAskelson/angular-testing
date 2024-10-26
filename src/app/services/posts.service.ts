import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  posts: Array<any> = [
    { id: 0, post: 'post1', date: '11/21/94'},
    { id: 1, post: 'post2', date: '11/21/95'},
    { id: 2, post: 'post3', date: '11/21/96'},
    { id: 3, post: 'post4', date: '11/21/97'},
    { id: 4, post: 'post5', date: '11/21/98'}
  ]

  getPost(){
    return this.posts;
  }

  addPost(data: any){
    let lastId = this.posts[this.posts.length - 1].id
    this.posts.push({
      id: lastId+1,
      post: data.value.post,
      date: data.value.date
    })
    console.log(this.posts)
  }

  deletePost(id: number){

    if(this.posts.length == 1){
      this.posts.pop()
    } else {
      this.posts.splice(id, 1)
    }
  }
}
