import { Component, OnInit, Input } from '@angular/core';
import { ManifestFilterContentService } from '../services/manifest-filter-content.service';

@Component({
    selector: 'app-manifest-filter',
    templateUrl: './manifest-filter.component.html',
    styleUrls: ['./manifest-filter.component.css']
})
export class ManifestFilterComponent implements OnInit {

    @Input() analyzerContent: string;
    @Input() scraperContent: string;
    manifestFilterReturn: any;

    constructor(
        private manifestFilterContentService: ManifestFilterContentService
    ) { }

    ngOnInit() {

        console.log("o que eu peguei dos meus irmãos",this.analyzerContent);
        console.log("o que eu peguei dos meus irmãos",this.scraperContent);
        this.manifestFilterContentService.getAppsPermissions().subscribe(manifestFilterReturn => {this.manifestFilterReturn = manifestFilterReturn});

        console.log("manifestFilterReturn",this.manifestFilterReturn);
    }

}
