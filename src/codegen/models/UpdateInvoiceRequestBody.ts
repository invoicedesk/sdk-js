/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateInvoiceRequestBody = {
  /**
   * Date of the invoice
   */
  date?: string;
  /**
   * Status of the invoice
   */
  status?: UpdateInvoiceRequestBody.status;
  /**
   * Currency of the invoice
   */
  currency?: string;
};

export namespace UpdateInvoiceRequestBody {

  /**
   * Status of the invoice
   */
  export enum status {
    DRAFT = 'draft',
    SENT = 'sent',
    PAID = 'paid',
    OUTSTANDING = 'outstanding',
    OVERDUE = 'overdue',
  }


}

