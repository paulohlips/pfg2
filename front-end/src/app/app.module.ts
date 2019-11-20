import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ScraperComponent } from './scraper/scraper.component';
import { AnalyzerComponent } from './analyzer/analyzer.component';
import { DialogContentComponent} from './dialog-content/dialog-content.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatListModule, MatList } from '@angular/material/list';
import { MatDividerModule} from '@angular/material/divider'; 
import { DialogContentService } from './services/dialog-content.service';
import { ComparatorComponent } from './comparator/comparator.component';



@NgModule({
  declarations: [
    AppComponent,
    ScraperComponent,
    AnalyzerComponent,
    DialogContentComponent,
    ComparatorComponent,
  ],
  entryComponents: [
      DialogContentComponent
  ],    
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [
      DialogContentService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
