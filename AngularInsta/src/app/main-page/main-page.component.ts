import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}

interface Post {
  name: string;
  image: string;
  likes: number;
}

posts = [
  {
    name: "Hans",
    image: "/assets/img/banana.jpg",
    likes: 9,
  };
    {
    name: "Helene",
    image: "/assets/img/currant.jpg",
    likes: 4,
  };
    {
    name: "Mandy",
    image: "/assets/img/orange.jpg",
    likes: 2,
  };
    {
    name: "Herbert",
    image: "/assets/img/currant.jpg",
    likes: 5,
  };
  
]