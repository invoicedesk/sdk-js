/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListRolesResponse } from '../models/ListRolesResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RoleAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List roles
   * Get all available roles
   * @returns ListRolesResponse
   * @throws ApiError
   */
  public listRoles(): CancelablePromise<ListRolesResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/roles',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

}
