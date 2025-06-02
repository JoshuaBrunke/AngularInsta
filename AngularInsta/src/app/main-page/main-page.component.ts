import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';

export interface Posts {
  name: string;
  image: string;
  likes: number;
  isLiked: boolean;
  comments?: string[];
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule, SinglePostComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  posts: Posts[] = [
    {
      name: 'Hans',
      image: '../assets/img/banana.jpg',
      likes: 9,
      isLiked: false,
      comments: ["Bananas are peak!", "I was here"],
    },
    {
      name: 'Helene',
      image: '../assets/img/currant.jpg',
      likes: 4,
      isLiked: false,
      comments: ["First", "Save 20% on CURRANT SUPERFOOD CAPSULES now!"],
    },
    {
      name: 'Herbert',
      image: '../assets/img/orange.jpg',
      likes: 2,
      isLiked: false,
      comments: ["I hate peeling those things", "Pretty!"],
    },
  ];

addComment(comment: string, post: Posts) {
  if (comment.trim()) {
    post.comments?.push(comment);
  }
}

}
