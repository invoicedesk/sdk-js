/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvoiceStatusCounts } from './InvoiceStatusCounts';
import type { MonthlyInvoiceStats } from './MonthlyInvoiceStats';
import type { MonthlyRevenue } from './MonthlyRevenue';

export type DashboardData = {
  /**
   * Total revenue generated in the current month in the default currency
   */
  currentMonthRevenue: number;
  /**
   * Total number of invoices that have been sent to clients in the current month
   */
  invoicesSentThisMonth: number;
  /**
   * Total outstanding amounts mapped by currency
   */
  totalOutstanding: Record<string, any>;
  /**
   * Monthly revenue breakdown for the past 12 months, ordered chronologically
   */
  yearlyRevenueByMonth: Array<MonthlyRevenue>;
  /**
   * Monthly statistics showing the number of invoices raised and sent over the past 12 months
   */
  monthlyInvoiceStats: Array<MonthlyInvoiceStats>;
  /**
   * Current count of invoices grouped by their status (paid, outstanding, pending, overdue)
   */
  invoiceStatusCounts: InvoiceStatusCounts;
  /**
   * Total hours logged across all projects
   */
  totalHours: number;
  /**
   * Total hours that have not been billed yet
   */
  unbilledHours: number;
};

