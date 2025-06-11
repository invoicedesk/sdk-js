/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateUserProfileRequest } from '../models/UpdateUserProfileRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserProfileAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Fetch auth user profile
   * Fetches the complete profile of the authenticated user
   * @returns SuccessResponse
   * @throws ApiError
   */
  public me(): CancelablePromise<SuccessResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/me',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Update user profile
   * @returns any Profile updated successfully
   * @throws ApiError
   */
  public userProfileControllerUpdateMe({
    requestBody,
  }: {
    requestBody: UpdateUserProfileRequest,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/me',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
