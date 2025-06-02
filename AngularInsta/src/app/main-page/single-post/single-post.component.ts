import { Component, Input, Output, EventEmitter} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Posts } from '../main-page.component'; // Importing the Posts interface
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {

  @Input() singlepost!: Posts; // Using the Posts interface for single post input
  @Output() newpost = new EventEmitter<string>();

  newComment: string = "";

    likePost(singlepost: Posts) {
    if (!singlepost.isLiked) {
      singlepost.likes++;
      singlepost.isLiked = true;
    } else {
      singlepost.likes--;
      singlepost.isLiked = false;
    }
  }

  addNewComment() {
    this.newpost.emit(this.newComment);
    this.newComment = ""; // Reset the input field after emitting the new comment
} 
}
