import { Component, Input, OnChanges } from '@angular/core';
import { Invoice } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-status-board',
  templateUrl: './invoice-status-board.component.html',
  styleUrls: ['./invoice-status-board.component.css']
})
export class InvoiceSummaryComponent implements OnChanges {
  @Input() invoices: Invoice[] = [];

  approvedCount = 0;
  pendingCount = 0;
  rejectedCount = 0;
  totalInvoices = 0;
  totalCost = 0;

  ngOnChanges() {
    this.calculateSummary();
  }

  calculateSummary() {
    this.approvedCount = this.invoices.filter(inv => inv.status === 'approved').length;
    this.pendingCount = this.invoices.filter(inv => inv.status === 'pending').length;
    this.rejectedCount = this.invoices.filter(inv => inv.status === 'rejected').length;
    this.totalInvoices = this.invoices.length;
  }
}
