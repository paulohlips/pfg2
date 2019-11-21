import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'app-dialog-content',
    templateUrl: './dialog-content.component.html',
    styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {

    appName: string;
    appId: string;
    appPhoto: string;
    appPath: string;

    constructor(
        public dialogRef: MatDialogRef<DialogContentComponent>,
        @Inject(MAT_DIALOG_DATA) data
    ) {
        this.appName = data.appName;
        this.appId = data.appId;
        this.appPhoto = data.appPhoto;
        this.appPath = data.appPath;
    }


    ngOnInit() {
    }


    onClose() {
        this.dialogRef.close();
    }

}
