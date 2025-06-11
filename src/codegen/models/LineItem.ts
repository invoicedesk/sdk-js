/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LineItem = {
  /**
   * ID of the invoiceable item
   */
  id: string;
  /**
   * The type of entity being invoiced
   */
  type: LineItem.type;
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
  export enum type {
    GOODS = 'GOODS',
    SERVICES = 'SERVICES',
    TIMESHEET = 'TIMESHEET',
  }


}

