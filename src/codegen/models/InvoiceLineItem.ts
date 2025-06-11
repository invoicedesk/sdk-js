/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InvoiceLineItem = {
  /**
   * ID of the line item
   */
  id: string;
  /**
   * ID of the associated invoice
   */
  invoiceId: string;
  /**
   * ID of the associated product or service. If null, the product or service is not associated internally
   */
  itemId: string;
  /**
   * Type of line item.
   */
  type: InvoiceLineItem.type;
  /**
   * Short description of the line item
   */
  description: string;
  /**
   * Price at which this item was invoiced
   */
  price: number;
  /**
   * Quantity of the invoiced item
   */
  quantity: number;
  /**
   * Unit of measure
   */
  unit: string;
  /**
   * Order in which the item appears in the rendered invoice
   */
  sortOrder: number;
  /**
   * Timestamp of line item creation
   */
  createdAt: string;
  /**
   * ID of the associated tax. If not set, no tax is applied.
   */
  taxId: string;
};

export namespace InvoiceLineItem {

  /**
   * Type of line item.
   */
  export enum type {
    GOODS = 'GOODS',
    SERVICES = 'SERVICES',
    TIMESHEET = 'TIMESHEET',
  }


}

