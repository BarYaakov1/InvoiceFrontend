import { Component, Input } from '@angular/core';
import { Invoice } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-toggle',
  templateUrl: './invoice-toggle.component.html',
  styleUrls: ['./invoice-toggle.component.css']
})
export class InvoiceToggleComponent {
  @Input() invoices: Invoice[] = []; 
  isSplitView = false; 
  selectedInvoice: Invoice | null = null;

  // Update view 
  setView(split: boolean) {
    this.isSplitView = split;
  }

  // Handle toggle change event
  onToggleChange() {
    console.log('Toggle switched:', this.isSplitView ? 'Split View' : 'Full View');
  }

  // Select invoice for PDF preview
  onInvoiceSelected(invoice: Invoice) {
    this.selectedInvoice = invoice;
    if (!this.isSplitView) {
      this.setView(true); // Switch to split view when an invoice is selected
    }
  }
}
