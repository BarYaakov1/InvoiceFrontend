import { Component, OnInit } from '@angular/core';
import { InvoiceService, Invoice } from '../../services/invoice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  allInvoices: Invoice[] = []; // Stores all invoices (original list)
  filteredInvoices: Invoice[] = []; // Stores filtered invoices (search results)

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.invoiceService.getAllInvoices().subscribe((data) => {
      this.allInvoices = data;
      this.filteredInvoices = [...data]; 
    });
  }

  updateInvoices(searchResults: Invoice[]): void {
    this.filteredInvoices = searchResults.length ? searchResults : [...this.allInvoices];
  }
}
