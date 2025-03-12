import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Invoice {
  id: number;
  name: string;
  supplier: string;
  date: string;
  status: string;
  cost: string;
}

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private apiUrl = 'http://localhost:3000/invoices';

  constructor(private http: HttpClient) {}
  
  getAllInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.apiUrl); // Get all invoices
  }
  
  searchInvoices(search: string, startDate: string, endDate: string): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.apiUrl, {
      params: { search, startDate, endDate },
    });
  }
}
