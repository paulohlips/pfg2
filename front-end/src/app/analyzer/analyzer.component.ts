import { Component, OnInit, Input } from '@angular/core';
import { AnalyzerContentService } from '../services/analyzer-content.service';
import { analyzerContent } from '../models/analyzer-content.model';

@Component({
    selector: 'app-analyzer',
    templateUrl: './analyzer.component.html',
    styleUrls: ['./analyzer.component.css']
})
export class AnalyzerComponent implements OnInit {

    @Input() appId: string;
    private postContent: any;
    public postReturn: analyzerContent;
    public postReturnLength: number;

    constructor(
        private analyzerContentService: AnalyzerContentService,
    ) { }

    ngOnInit() {
        this.postContent = {
            appId: this.appId,
        };
        this.analyzerContentService.postApp().subscribe(appDetails => {
            this.postReturn = appDetails.permissions;
            this.postReturnLength = appDetails.permissions.length;
            console.log("postReturn:", this.postReturn);
        });
    }

}
