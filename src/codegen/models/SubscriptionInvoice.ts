/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LineItem } from './LineItem';

export type SubscriptionInvoice = {
  id: string;
  lineItems: Array<LineItem>;
  paymentId: string;
  status: string;
  amount: number;
  amountPaid: number;
  amountDue: number;
  currency: string;
  shortUrl: string;
  issuedAt: number;
  paidAt: number | null;
  billingStart: number;
  billingEnd: number;
  createdAt: number;
};

