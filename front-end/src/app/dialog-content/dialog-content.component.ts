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

    constructor(
        public dialogRef: MatDialogRef<DialogContentComponent>,
        @Inject(MAT_DIALOG_DATA) data
    ) {
        this.appName = data.appName;
        this.appId = data.appId;
        this.appPhoto = data.appPhoto;
    }


    ngOnInit() {
    }


    onClose() {
        this.dialogRef.close();
    }

}
