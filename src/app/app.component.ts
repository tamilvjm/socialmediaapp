import { Component } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Social Media Sharing';
  postContent:string;
  twitterUrl = "http://dev.twitter.com";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {

   }

    postInSocialMedia () {
      debugger;
      this.http.post(this.twitterUrl, this.postContent, this.httpOptions).subscribe(
        ()=>{
              debugger;
        }
      );
    }
}
