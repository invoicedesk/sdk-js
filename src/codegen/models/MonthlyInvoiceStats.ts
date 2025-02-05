/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MonthlyInvoiceStats = {
  /**
   * The month and year in YYYY-MM format for which the invoice statistics are calculated
   */
  month: string;
  /**
   * Number of invoices created/raised during this month
   */
  raised: number;
  /**
   * Number of invoices that were sent to clients during this month
   */
  sent: number;
};

