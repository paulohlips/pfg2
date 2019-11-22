import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { DialogContentService } from './services/dialog-content.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
    })
export class AppComponent implements OnInit {

    // apps: dialogContent;
    public apps: [];
    public appIdInput: string;
    public appPathInput: string;
    public showQueryResults: boolean;
    
    constructor(
        public dialog: MatDialog,
        private dialogContentService: DialogContentService
        ) { }

    ngOnInit(){

    }

    onClick(){
        this.showQueryResults = true;
        this.dialogContentService.getApps(this.appIdInput).subscribe(result => {this.apps = result.resultado;});
    }
    
openDialog(appIdParam: any, appPhotoParam: any, appNameParam: any){
        const dialogConfig = new MatDialogConfig;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        dialogConfig.height = "90%";
        dialogConfig.data = {appId: appIdParam, appPhoto: appPhotoParam, appName: appNameParam, appPath: this.appPathInput};
        // dialogConfig.maxHeight = "80%";
        this.dialog.open(DialogContentComponent, dialogConfig);
    }
}