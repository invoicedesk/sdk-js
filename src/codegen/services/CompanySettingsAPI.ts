/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTaxSettingsRequest } from '../models/CreateTaxSettingsRequest';
import type { CreateTaxSettingsResponse } from '../models/CreateTaxSettingsResponse';
import type { InvoiceSettingsResponse } from '../models/InvoiceSettingsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CompanySettingsAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create a new tax
   * Creates a new tax setting for the company
   * @returns CreateTaxSettingsResponse
   * @throws ApiError
   */
  public createTax({
    companyId,
    requestBody,
  }: {
    /**
     * ID of the company
     */
    companyId: string,
    requestBody: CreateTaxSettingsRequest,
  }): CancelablePromise<CreateTaxSettingsResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/settings/taxes',
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
   * Get company invoice settings
   * Retrieves invoice settings including global settings (like padding) and next invoice number per prefix
   * @returns InvoiceSettingsResponse
   * @throws ApiError
   */
  public getInvoiceSettings({
    companyId,
  }: {
    /**
     * ID of the company
     */
    companyId: string,
  }): CancelablePromise<InvoiceSettingsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/settings/invoice',
      path: {
        'companyId': companyId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

}
