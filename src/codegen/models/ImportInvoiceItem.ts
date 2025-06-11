/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LineItem } from './LineItem';

export type ImportInvoiceItem = {
  /**
   * Client against whom the invoice needs to be generated
   */
  clientId: string;
  /**
   * The date of the invoice
   */
  date: string;
  /**
   * Date that the payment of this invoice is due
   */
  dueDate?: string;
  /**
   * Valid ISO 4217 currency code for the invoice
   */
  currency: string;
  /**
   * Custom prefix for this invoice. All invoices for a prefix series are guaranteed to have separate counters
   */
  prefix?: string;
  /**
   * Imported invoice number.
   */
  invoiceNumber: number;
  /**
   * The line items of the invoice
   */
  lineItems: Array<LineItem>;
};

