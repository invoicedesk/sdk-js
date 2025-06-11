/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateInvoicePayload } from '../models/CreateInvoicePayload';
import type { CreateInvoiceResponse } from '../models/CreateInvoiceResponse';
import type { GetInvoiceResponse } from '../models/GetInvoiceResponse';
import type { ImportInvoicesPayload } from '../models/ImportInvoicesPayload';
import type { ImportInvoicesResponse } from '../models/ImportInvoicesResponse';
import type { ListInvoiceResponse } from '../models/ListInvoiceResponse';
import type { SendInvoiceRequestBody } from '../models/SendInvoiceRequestBody';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateInvoiceRequestBody } from '../models/UpdateInvoiceRequestBody';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InvoiceAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List invoices
   * Get all invoices created for a company
   * @returns ListInvoiceResponse
   * @throws ApiError
   */
  public listInvoices({
    companyId,
    page = 1,
    limit = 20,
    prefixes,
    include,
  }: {
    /**
     * Company ID for which to list invoices
     */
    companyId: string,
    /**
     * Page being requested
     */
    page?: number,
    /**
     * Items to limit per page
     */
    limit?: number,
    /**
     * Comma delimited query string that filters invoices by prefix.
     */
    prefixes?: string,
    /**
     * Comma separated list of related data to include in the response
     */
    include?: 'items' | 'client' | 'company',
  }): CancelablePromise<ListInvoiceResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/invoices',
      path: {
        'companyId': companyId,
      },
      query: {
        'page': page,
        'limit': limit,
        'prefixes': prefixes,
        'include': include,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Create invoice
   * Raise an invoice for a company
   * @returns CreateInvoiceResponse
   * @throws ApiError
   */
  public createInvoice({
    companyId,
    requestBody,
  }: {
    /**
     * Company ID for which to create an invoice
     */
    companyId: string,
    requestBody: CreateInvoicePayload,
  }): CancelablePromise<CreateInvoiceResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/invoices',
      path: {
        'companyId': companyId,
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
   * Get invoice by ID
   * Get a specific invoice by its ID
   * @returns GetInvoiceResponse
   * @throws ApiError
   */
  public getInvoice({
    companyId,
    invoiceId,
  }: {
    /**
     * Company ID the invoice belongs to
     */
    companyId: string,
    /**
     * ID of the invoice to fetch
     */
    invoiceId: string,
  }): CancelablePromise<GetInvoiceResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/invoices/{invoiceId}',
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

  /**
   * Update invoice
   * Update an invoice's date, status, or currency
   * @returns GetInvoiceResponse
   * @throws ApiError
   */
  public updateInvoice({
    companyId,
    invoiceId,
    requestBody,
  }: {
    /**
     * Company ID the invoice belongs to
     */
    companyId: string,
    /**
     * ID of the invoice to update
     */
    invoiceId: string,
    requestBody: UpdateInvoiceRequestBody,
  }): CancelablePromise<GetInvoiceResponse> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/companies/{companyId}/invoices/{invoiceId}',
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
   * Delete a specific invoice
   * Deletes an invoice by ID
   * @returns SuccessResponse
   * @throws ApiError
   */
  public deleteInvoice({
    companyId,
    invoiceId,
  }: {
    /**
     * Company ID for which to create an invoice
     */
    companyId: string,
    /**
     * ID of the invoice to be deleted
     */
    invoiceId: string,
  }): CancelablePromise<SuccessResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/companies/{companyId}/invoices/{invoiceId}',
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

  /**
   * Import invoices
   * Import multiple invoices with custom invoice numbers
   * @returns ImportInvoicesResponse
   * @throws ApiError
   */
  public importInvoices({
    companyId,
    requestBody,
  }: {
    /**
     * Company ID for which to import invoices
     */
    companyId: string,
    requestBody: ImportInvoicesPayload,
  }): CancelablePromise<ImportInvoicesResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/invoices/import',
      path: {
        'companyId': companyId,
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
   * Export invoice
   * Export an invoice in PDF or CSV format
   * @returns SuccessResponse
   * @throws ApiError
   */
  public exportInvoice({
    companyId,
    invoiceId,
    format,
  }: {
    /**
     * Company ID for which to create an invoice
     */
    companyId: string,
    /**
     * ID of the invoice to be exported
     */
    invoiceId: string,
    /**
     * Format to export the invoice in
     */
    format: 'pdf' | 'csv',
  }): CancelablePromise<SuccessResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/invoices/{invoiceId}/export',
      path: {
        'companyId': companyId,
        'invoiceId': invoiceId,
      },
      query: {
        'format': format,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Send invoice
   * Send an invoice to the client via email
   * @returns SuccessResponse
   * @throws ApiError
   */
  public sendInvoice({
    companyId,
    invoiceId,
    requestBody,
  }: {
    /**
     * Company ID the invoice belongs to
     */
    companyId: string,
    /**
     * ID of the invoice to send
     */
    invoiceId: string,
    requestBody: SendInvoiceRequestBody,
  }): CancelablePromise<SuccessResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/invoices/{invoiceId}/send',
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

}
