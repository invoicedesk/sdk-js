/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTagRequestBody } from '../models/CreateTagRequestBody';
import type { CreateTagResponse } from '../models/CreateTagResponse';
import type { GetTagResponse } from '../models/GetTagResponse';
import type { ListTagsResponse } from '../models/ListTagsResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateTagResponse } from '../models/UpdateTagResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TagsAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List tags
   * List all tags that belong to a company.
   * @returns ListTagsResponse
   * @throws ApiError
   */
  public listTags({
    companyId,
  }: {
    /**
     * ID of the company
     */
    companyId: string,
  }): CancelablePromise<ListTagsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/tags',
      path: {
        'companyId': companyId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Create tag
   * Create a new tag for a company.
   * @returns CreateTagResponse
   * @throws ApiError
   */
  public createTag({
    companyId,
    requestBody,
  }: {
    /**
     * ID of the company
     */
    companyId: string,
    requestBody: CreateTagRequestBody,
  }): CancelablePromise<CreateTagResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/tags',
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
   * Get tag details
   * Get details of a specific tag.
   * @returns GetTagResponse
   * @throws ApiError
   */
  public getTag({
    companyId,
    id,
  }: {
    /**
     * ID of the company
     */
    companyId: string,
    /**
     * ID of the tag
     */
    id: string,
  }): CancelablePromise<GetTagResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/tags/{id}',
      path: {
        'companyId': companyId,
        'id': id,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Update tag
   * Update an existing tag.
   * @returns UpdateTagResponse
   * @throws ApiError
   */
  public updateTag({
    companyId,
    id,
    requestBody,
  }: {
    /**
     * ID of the company
     */
    companyId: string,
    /**
     * ID of the tag
     */
    id: string,
    requestBody: CreateTagRequestBody,
  }): CancelablePromise<UpdateTagResponse> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/companies/{companyId}/tags/{id}',
      path: {
        'companyId': companyId,
        'id': id,
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
   * Delete tag
   * Delete an existing tag.
   * @returns SuccessResponse
   * @throws ApiError
   */
  public deleteTag({
    companyId,
    id,
  }: {
    /**
     * ID of the company
     */
    companyId: string,
    /**
     * ID of the tag
     */
    id: string,
  }): CancelablePromise<SuccessResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/companies/{companyId}/tags/{id}',
      path: {
        'companyId': companyId,
        'id': id,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

}
