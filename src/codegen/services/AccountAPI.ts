/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAccountRequest } from '../models/CreateAccountRequest';
import type { CreateAccountResponse } from '../models/CreateAccountResponse';
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
   * Create a new account
   * Creates a brand new account
   * @returns CreateAccountResponse
   * @throws ApiError
   */
  public createAccount({
    requestBody,
  }: {
    requestBody: CreateAccountRequest,
  }): CancelablePromise<CreateAccountResponse> {
    return this.httpRequest.request({
      method: 'POST',
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
   * Create API token
   * Create an API access token with an expiry date
   * @returns CreateApiTokenResponse
   * @throws ApiError
   */
  public createApiToken({
    requestBody,
  }: {
    requestBody: CreateTokenPayload,
  }): CancelablePromise<CreateApiTokenResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/accounts/api-token',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

}
