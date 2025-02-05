/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAccountRequest } from '../models/CreateAccountRequest';
import type { CreateApiTokenResponse } from '../models/CreateApiTokenResponse';
import type { CreateTokenPayload } from '../models/CreateTokenPayload';
import type { GetAccountDetailsResponse } from '../models/GetAccountDetailsResponse';
import type { UpdateAccountRequestBody } from '../models/UpdateAccountRequestBody';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get account details
   * Retrieve the name and timestamp details of the account
   * @returns GetAccountDetailsResponse
   * @throws ApiError
   */
  public getAccountDetails(): CancelablePromise<GetAccountDetailsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/accounts',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Update account details
   * Update account details
   * @returns GetAccountDetailsResponse
   * @throws ApiError
   */
  public updateAccount({
    requestBody,
  }: {
    requestBody: UpdateAccountRequestBody,
  }): CancelablePromise<GetAccountDetailsResponse> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/accounts',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public accountControllerCreateAccount({
    requestBody,
  }: {
    requestBody: CreateAccountRequest,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/accounts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Create API token
   * Create an API access token with an expiry date
   * @returns CreateApiTokenResponse
   * @throws ApiError
   */
  public createApiToken({
    accountId,
    requestBody,
  }: {
    /**
     * Account ID to which the company belongs
     */
    accountId: string,
    requestBody: CreateTokenPayload,
  }): CancelablePromise<CreateApiTokenResponse> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/accounts/{accountId}/api-token',
      path: {
        'accountId': accountId,
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
