import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InvoiceSearchComponent } from './components/invoice-search/invoice-search.component';
import { NevBar } from './components/nev-bar/nev-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { InvoiceSummaryComponent } from './components/invoice-status-board/invoice-status-board.component';
import { InvoiceToggleComponent } from './components/invoice-toggle/invoice-toggle.component';
import { InvoiceTableComponent } from './components/invoice-table/invoice-table.component'; // ✅ Import MatTableModule
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDatepickerToggle } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // <-- Import this
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; // ✅ Import this

@NgModule({
  declarations: [AppComponent,
     InvoiceSearchComponent,
      NevBar, 
      DashboardComponent, InvoiceSummaryComponent, InvoiceToggleComponent, InvoiceTableComponent],
  imports: [BrowserModule,
    HttpClientModule, 
    FormsModule, 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,MatTableModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,
    MatDatepickerModule,MatNativeDateModule,BrowserAnimationsModule,MatSlideToggleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
