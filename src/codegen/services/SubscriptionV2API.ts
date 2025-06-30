/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListSubscriptionPlansV2Response } from '../models/ListSubscriptionPlansV2Response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SubscriptionV2API {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List subscription plans with features
   * Get all available subscription plans with their features (inclusions and exclusions).
   * @returns ListSubscriptionPlansV2Response
   * @throws ApiError
   */
  public listSubscriptionPlansV2(): CancelablePromise<ListSubscriptionPlansV2Response> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/subscription/plans',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

}
