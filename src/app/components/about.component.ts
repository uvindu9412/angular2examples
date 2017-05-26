import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'about',
  template: `<h3>About this app
   </h3><br/>
  {{name}}<br/>
  {{onames}}
  <div *ngFor="let photo of photos">
    <h4>{{photo.title}}</h4>
   <img src="{{photo.url}}"/>
</div>
    `,
 providers:[PostsService]
})
export class AboutComponent  { 
   photos:Photo[];
   name:string;
   onames:string[];
   constructor (private postsService:PostsService){
     this.name = "UIB";
     this.onames=["I","B"];
   this.postsService.getImagePosts().subscribe(photos =>{
        this.photos=photos;
        //console.log(photos);
     });
   }
}
interface Photo{
    albumId:number;
    id:number;
    title:string;
    url:string;
    thumbnailUrl:string;
}
