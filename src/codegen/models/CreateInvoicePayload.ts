/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeliveryOptions } from './DeliveryOptions';
import type { LineItem } from './LineItem';

export type CreateInvoicePayload = {
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
   * Custom prefix for this invoice. All invoices for a pefix series are guaranteed to have separate counters
   */
  prefix?: string;
  /**
   * The line items of the invoice
   */
  lineItems: Array<LineItem>;
  /**
   * The status of the invoice
   */
  status?: string;
  /**
   * Type of discount to apply to the invoice
   */
  discountType?: CreateInvoicePayload.discountType;
  /**
   * Value of the discount. For percentage type: 1-100, for flat type: positive number
   */
  discountValue?: number;
  /**
   * Options to send the invoice to the customer
   */
  deliveryOptions: DeliveryOptions;
};

export namespace CreateInvoicePayload {

  /**
   * Type of discount to apply to the invoice
   */
  export enum discountType {
    PERCENTAGE = 'percentage',
    FLAT = 'flat',
  }


}

