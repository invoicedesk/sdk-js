/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LineItem = {
  /**
   * Internal ID of the line item
   */
  id?: string;
  /**
   * ID of the invoiceable item. Example: A product or timesheet ID
   */
  invoiceableId: string;
  /**
   * The type of entity being invoiced
   */
  invoiceableType: LineItem.invoiceableType;
  /**
   * Description of the invoiceable item
   */
  description?: string;
  /**
   * Price of the invoiceable item
   */
  price: number;
  /**
   * Quantity of the invoiceable item
   */
  quantity: number;
  /**
   * Unit of measurement
   */
  unit?: string;
  /**
   * Sort order of the item in the invoice
   */
  sortOrder?: number;
  /**
   * Tax ID for this line item
   */
  taxId?: string;
};

export namespace LineItem {

  /**
   * The type of entity being invoiced
   */
  export enum invoiceableType {
    GOODS = 'GOODS',
    SERVICES = 'SERVICES',
    TIMESHEET = 'TIMESHEET',
  }


}

