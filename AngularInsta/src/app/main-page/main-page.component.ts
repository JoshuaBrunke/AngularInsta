import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface Posts {
  name: string;
  image: string;
  likes: number;
  isLiked: boolean;
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
posts: Posts[] = [
  {
    name: "Hans",
    image: "../assets/img/banana.jpg",
    likes: 9,
    isLiked: false,
  },
    {
    name: "Helene",
    image: "../assets/img/currant.jpg",
    likes: 4,
    isLiked: false,
  },
    {
    name: "Herbert",
    image: "../assets/img/orange.jpg",
    likes: 2,
    isLiked: false,
  },
  
]

likePost(post: Posts) {
  if (!post.isLiked) {
    post.likes++;
    post.isLiked = true;
  } else {
    post.likes--;
    post.isLiked = false;
  }
  
}

}

