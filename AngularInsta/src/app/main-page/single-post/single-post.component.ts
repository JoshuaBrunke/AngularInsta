import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Posts } from '../main-page.component'; // Importing the Posts interface

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {

  @Input() singlepost!: Posts; // Using the Posts interface for single post input

    likePost(singlepost: Posts) {
    if (!singlepost.isLiked) {
      singlepost.likes++;
      singlepost.isLiked = true;
    } else {
      singlepost.likes--;
      singlepost.isLiked = false;
    }
  }
}
