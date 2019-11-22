import { Component, OnInit } from '@angular/core';
import { ManifestFilterContentService } from '../services/manifest-filter-content.service';
import { manifestFilterContent } from '../models/manifest-filter-content.model';

@Component({
    selector: 'app-comparator',
    templateUrl: './comparator.component.html',
    styleUrls: ['./comparator.component.css']
})
export class ComparatorComponent implements OnInit {

    // private manifestFilterReturn:any = [];
    private manifestFilterReturn: any;
    private manifestFilterReturnSub: any;

    constructor(
        private manifestFilterContentService: ManifestFilterContentService
    ) { }

    ngOnInit() {
        this.manifestFilterContentService.getAppsPermissions().subscribe(manifestFilterReturn => { 
            this.manifestFilterReturn = manifestFilterReturn.grupos.substring(2);
            this.manifestFilterReturn = this.manifestFilterReturn.substring(0,this.manifestFilterReturn.length-2);
            this.manifestFilterReturn = this.manifestFilterReturn.split('],[');            
        });
    }

}
