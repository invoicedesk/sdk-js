/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Payment = {
  id: string;
  amount: number;
  currencyCode: string;
  paymentDate: string;
  notes?: string;
  referenceNumber?: string;
  createdAt: string;
  invoice?: Record<string, any>;
};

