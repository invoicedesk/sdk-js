/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LineItem } from './LineItem';

export type UpdateInvoiceRequestBody = {
  /**
   * Date of the invoice
   */
  date?: string;
  /**
   * Due date of the invoice
   */
  dueDate?: string;
  /**
   * Status of the invoice
   */
  status?: UpdateInvoiceRequestBody.status;
  /**
   * Currency of the invoice
   */
  currency?: string;
  /**
   * ID of the client
   */
  clientId?: string;
  /**
   * Line items in the invoice
   */
  lineItems?: Array<LineItem>;
  /**
   * Notes for the invoice
   */
  notes?: string;
  /**
   * Discount value for the invoice
   */
  discountValue?: number;
  /**
   * Type of discount
   */
  discountType?: UpdateInvoiceRequestBody.discountType;
};

export namespace UpdateInvoiceRequestBody {

  /**
   * Status of the invoice
   */
  export enum status {
    DRAFT = 'draft',
    SENT = 'sent',
    PAID = 'paid',
  }

  /**
   * Type of discount
   */
  export enum discountType {
    PERCENTAGE = 'percentage',
    FLAT = 'flat',
  }


}

