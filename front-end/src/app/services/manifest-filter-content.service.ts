import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { manifestFilterContent } from '../models/manifest-filter-content.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManifestFilterContentService {
    
    private baseUrl = 'http://locahost:3002/';
  
    constructor(
        private http: HttpClient,
    ) { }

    getAppsPermissions(): Observable<manifestFilterContent> {
        return this.http.get<manifestFilterContent>(this.baseUrl);
    }

}
