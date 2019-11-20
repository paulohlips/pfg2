import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { scraperContent } from '../models/scraper-content.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ScraperContentService {

    private baseUrl = "http://localhost:3001/permission/";

    constructor(
        private http: HttpClient,
    ) { }

    postApp(postContent: string): Observable<scraperContent> {
        return this.http.post<scraperContent>(this.baseUrl, postContent);
    }
}
