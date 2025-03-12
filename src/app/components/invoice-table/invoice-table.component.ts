import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Invoice } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css']
})
export class InvoiceTableComponent implements OnChanges {
  @Input() invoices: Invoice[] = []; 
  @Output() invoiceSelected = new EventEmitter<Invoice>(); 
  dataSource = new MatTableDataSource<Invoice>(this.invoices);
  displayedColumns: string[] = [ 'description', 'supplier', 'cost'];

  ngOnChanges() {
    this.dataSource.data = this.invoices; 
  }

  selectedRow: Invoice | null = null;

  selectRow(row: Invoice) {
    this.selectedRow = row;
    this.invoiceSelected.emit(row); 
  }
}
