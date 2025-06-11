/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RecordPaymentRequestBody = {
  /**
   * The ID of the invoice to record the payment for
   */
  amount: number;
  /**
   * The ISO 4217 currency code of the payment
   */
  currencyCode: string;
  /**
   * The date of the payment
   */
  paymentDate: string;
  /**
   * The payment method used
   */
  notes?: string;
  /**
   * The reference number for the payment
   */
  referenceNumber?: string;
};

