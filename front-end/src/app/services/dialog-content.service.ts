import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { dialogContent } from '../models/dialog-content.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DialogContentService {

    private baseUrl = 'http://localhost:3001/app&';

    constructor(
        private http: HttpClient,
    ) { }

    getApps(searchParams: string): Observable<dialogContent> {
        return this.http.get<dialogContent>(this.baseUrl + searchParams);
    }
}
