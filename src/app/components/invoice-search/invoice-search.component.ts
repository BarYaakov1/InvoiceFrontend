import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InvoiceService, Invoice } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-search',
  templateUrl: './invoice-search.component.html',
  styleUrls: ['./invoice-search.component.css'],
})
export class InvoiceSearchComponent {
  searchTerm = '';

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  @Output() searchResults = new EventEmitter<Invoice[]>(); 

  constructor(private invoiceService: InvoiceService) {}

  searchInvoices(): void {
    const startDate = this.range.value.start
      ? new Date(this.range.value.start).toISOString().split('T')[0]
      : '';
    const endDate = this.range.value.end
      ? new Date(this.range.value.end).toISOString().split('T')[0]
      : '';

    this.invoiceService
      .searchInvoices(this.searchTerm, startDate, endDate)
      .subscribe((data) => {
        this.searchResults.emit(data); 
      });
  }
}
