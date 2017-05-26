import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'user',
  templateUrl: `./user.component.html`,
  providers:[PostsService]
})
export class UserComponent  { 
  name:string ; 
  age:string;
  address:address;
  hobbies:string[];
  showHobbies:boolean;
  posts:Post[];

constructor (private postsService:PostsService){
    this.name = 'Grim'; 
    this.age = '25';
    this.address={
         street:'2nd street',
         city:'Manhatten '
    }
     this.hobbies = ["Music","Running"];
     this.showHobbies=false;
     this.postsService.getPosts().subscribe(posts =>{
        this.posts=posts;
     });
   }
  
   toggleHobbies(){
       if(this.showHobbies==true)
       this.showHobbies=false;
       else
       this.showHobbies=true;
   }
   /*addHobby(hobby){
       this.hobbies.push(hobby);
   }
   deleteHobby(i){
        this.hobbies.splice(i,1);
   }*/

}

interface address{
    street:string;
    city:string;
}

interface Post{
    id:number;
    title:string;
    body:string;
}


