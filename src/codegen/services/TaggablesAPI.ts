/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagEntitiesRequestBody } from '../models/TagEntitiesRequestBody';
import type { TagEntitiesResponse } from '../models/TagEntitiesResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TaggablesAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Tag entities
   * Apply tags to one or more entities (e.g., Projects)
   * @returns TagEntitiesResponse
   * @throws ApiError
   */
  public tagEntities({
    companyId,
    requestBody,
  }: {
    /**
     * ID of the company
     */
    companyId: string,
    requestBody: TagEntitiesRequestBody,
  }): CancelablePromise<TagEntitiesResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/taggables',
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

}
