/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvoiceLineItem } from './InvoiceLineItem';
import type { Payment } from './Payment';

export type Invoice = {
  /**
   * ID of the created invoice
   */
  id: string;
  /**
   * ID of the company the invoice belongs to
   */
  companyId: string;
  /**
   * ID of the client the invoice is raised against
   */
  clientId: string;
  /**
   * Invoice number
   */
  number: number;
  /**
   * Prefix of the invoice series
   */
  prefix: string;
  /**
   * The financial year this invoice belongs to
   */
  financialYear: string;
  /**
   * Date of the invoice
   */
  date: string;
  /**
   * Date on which this invoice must be paid, beyond which it becomes overdue
   */
  dueDate: string;
  /**
   * The current status of the invoice
   */
  status: string;
  /**
   * Currency of the invoice
   */
  currency: string;
  /**
   * Timestamp of invoice creation
   */
  createdAt: string;
  /**
   * Line items of this invoice
   */
  lineItems: Array<InvoiceLineItem>;
  /**
   * Client to whom the invoice is raised
   */
  client: Record<string, any>;
  /**
   * The company from which this invoice was raised
   */
  company: Record<string, any>;
  /**
   * The treatment of discount value. Either flat rate or percentage
   */
  discountType: Invoice.discountType;
  /**
   * The value of the discount
   */
  discountValue: number;
  /**
   * The payment status of the invoice
   */
  paymentStatus: Invoice.paymentStatus;
  /**
   * The payments made against this invoice
   */
  payments: Array<Payment>;
};

export namespace Invoice {

  /**
   * The treatment of discount value. Either flat rate or percentage
   */
  export enum discountType {
    PERCENTAGE = 'percentage',
    FLAT = 'flat',
  }

  /**
   * The payment status of the invoice
   */
  export enum paymentStatus {
    PAID = 'paid',
    PARTIALLY_PAID = 'partially_paid',
    OVERDUE = 'overdue',
    OUTSTANDING = 'outstanding',
  }


}

