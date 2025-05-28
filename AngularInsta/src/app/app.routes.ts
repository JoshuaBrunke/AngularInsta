import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component';
import { SinglePostComponent } from './main-page/single-post/single-post.component';

export const routes: Routes = [
    {path: "", component: MainPageComponent},
    {path: "contact", component: ContactComponent},
    
];
