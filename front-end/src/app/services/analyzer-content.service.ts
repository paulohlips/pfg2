import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { analyzerContent } from '../models/analyzer-content.model';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerContentService {

  private baseUrl = "http://localhost:3001/apk";
//   private postContent = { path: "C:/Users/Felipe/Documents/git/pfg/scraper/src/apk/Spotify_8.5.30.579.apk" }
private postContent = "C:/Users/Felipe/Documents/git/pfg/scraper/src/apk/Spotify_8.5.30.579.apk"

constructor(
    private http: HttpClient,
    ) { }
    
    postApp(postContent: string): Observable<analyzerContent> {
        this.postContent = JSON.parse('{ "path":"'+postContent+'"}');
        return this.http.post<analyzerContent>(this.baseUrl, this.postContent);
    }
}
