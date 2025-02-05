/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InvoiceStatusCounts = {
  /**
   * Total number of invoices that have been fully paid
   */
  paid: number;
  /**
   * Total number of invoices that are unpaid but not yet overdue
   */
  outstanding: number;
  /**
   * Total number of invoices that are in draft or pending approval state
   */
  pending: number;
  /**
   * Total number of invoices that have passed their due date without full payment
   */
  overdue: number;
};

