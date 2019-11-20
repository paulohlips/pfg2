import { Component, OnInit, Input } from '@angular/core';
import { ScraperContentService } from '../services/scraper-content.service';
import { scraperContent } from '../models/scraper-content.model';

@Component({
    selector: 'app-scraper',
    templateUrl: './scraper.component.html',
    styleUrls: ['./scraper.component.css']
})
export class ScraperComponent implements OnInit {

    @Input() appId: string;
    private postContent: any;
    public postReturn: scraperContent;
    public postReturnLength: number;

    constructor(
        private scraperContentService: ScraperContentService
    ) { }

    ngOnInit() {
        this.postContent = {
            appId: this.appId,
        };
        this.scraperContentService.postApp(this.postContent).subscribe(appDetails => {
            this.postReturn = appDetails.resultado;
            this.postReturnLength = appDetails.resultado.length;
            console.log("postReturn:", this.postReturn);
        });
    }
}
