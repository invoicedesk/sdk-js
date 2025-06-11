/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetInvoicePaymentsResponse } from '../models/GetInvoicePaymentsResponse';
import type { RecordPaymentRequestBody } from '../models/RecordPaymentRequestBody';
import type { RecordPaymentResponse } from '../models/RecordPaymentResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InvoicePaymentsAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Record payment for invoice
   * Records a payment made for a specific invoice
   * @returns RecordPaymentResponse
   * @throws ApiError
   */
  public recordPayment({
    companyId,
    invoiceId,
    requestBody,
  }: {
    /**
     * Company ID the invoice belongs to
     */
    companyId: string,
    /**
     * ID of the invoice to record payment for
     */
    invoiceId: string,
    requestBody: RecordPaymentRequestBody,
  }): CancelablePromise<RecordPaymentResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/invoices/{invoiceId}/payments',
      path: {
        'companyId': companyId,
        'invoiceId': invoiceId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Get payments for invoice
   * Retrieves all payments recorded for a specific invoice
   * @returns GetInvoicePaymentsResponse
   * @throws ApiError
   */
  public getPayments({
    companyId,
    invoiceId,
  }: {
    /**
     * Company ID the invoice belongs to
     */
    companyId: string,
    /**
     * ID of the invoice to get payments for
     */
    invoiceId: string,
  }): CancelablePromise<GetInvoicePaymentsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/invoices/{invoiceId}/payments',
      path: {
        'companyId': companyId,
        'invoiceId': invoiceId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

}
