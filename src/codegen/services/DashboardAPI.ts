/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DashboardResponse } from '../models/DashboardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DashboardAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Dashboard
   * Get metrics that power the dashboard
   * @returns DashboardResponse
   * @throws ApiError
   */
  public getDasboard({
    companyId,
  }: {
    /**
     * Company ID for which to get metrics
     */
    companyId: string,
  }): CancelablePromise<DashboardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/{companyId}/dashboard',
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
