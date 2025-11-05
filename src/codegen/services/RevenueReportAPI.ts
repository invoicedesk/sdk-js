/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RevenueReportResponse } from '../models/RevenueReportResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RevenueReportAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get revenue report
   * Get revenue analytics for admin users within a date range
   * @returns RevenueReportResponse
   * @throws ApiError
   */
  public getRevenueReport({
    start,
    end,
    companyId,
    currency,
  }: {
    /**
     * Start date for the report (YYYY-MM-DD format)
     */
    start: string,
    /**
     * End date for the report (YYYY-MM-DD format)
     */
    end: string,
    /**
     * Company ID for which to generate the revenue report
     */
    companyId: string,
    /**
     * Filter by specific currency code (optional). Uses company's default currency if not provided
     */
    currency?: string,
  }): CancelablePromise<RevenueReportResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/admin/revenue-report',
      path: {
        'companyId': companyId,
      },
      query: {
        'start': start,
        'end': end,
        'currency': currency,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

}
