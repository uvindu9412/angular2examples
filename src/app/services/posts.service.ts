import{Injectable} from '@angular/core';
import{Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
constructor(private http:Http){
    console.log("Posts");
}
    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(res => res.json());
    }
    getImagePosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/photos')
        .map(res => res.json());
    }
    addPosts(newposts){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('http://jsonplaceholder.typicode.com/posts',newposts,{headers:headers})
        .map(res=>res.json());
    }
}


