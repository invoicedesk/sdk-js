/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCommentRequestBody } from '../models/CreateCommentRequestBody';
import type { CreateCommentResponse } from '../models/CreateCommentResponse';
import type { ListCommentsResponse } from '../models/ListCommentsResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateCommentRequestBody } from '../models/UpdateCommentRequestBody';
import type { UpdateCommentResponse } from '../models/UpdateCommentResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CommentsAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List comments
   * List all comments for a specific entity.
   * @returns ListCommentsResponse
   * @throws ApiError
   */
  public listComments({
    companyId,
    commentableId,
    commentableType,
  }: {
    /**
     * ID of the company
     */
    companyId: string,
    /**
     * ID of the entity to get comments for
     */
    commentableId: string,
    /**
     * Type of entity to get comments for
     */
    commentableType: string,
  }): CancelablePromise<ListCommentsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/comments',
      path: {
        'companyId': companyId,
      },
      query: {
        'commentableId': commentableId,
        'commentableType': commentableType,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Create comment
   * Create a new comment on an entity.
   * @returns CreateCommentResponse
   * @throws ApiError
   */
  public createComment({
    companyId,
    requestBody,
  }: {
    /**
     * ID of the company
     */
    companyId: string,
    requestBody: CreateCommentRequestBody,
  }): CancelablePromise<CreateCommentResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/comments',
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
   * Update comment
   * Update an existing comment.
   * @returns UpdateCommentResponse
   * @throws ApiError
   */
  public updateComment({
    companyId,
    id,
    requestBody,
  }: {
    /**
     * ID of the company
     */
    companyId: string,
    /**
     * ID of the comment
     */
    id: string,
    requestBody: UpdateCommentRequestBody,
  }): CancelablePromise<UpdateCommentResponse> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/companies/{companyId}/comments/{id}',
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
   * Delete comment
   * Delete an existing comment.
   * @returns SuccessResponse
   * @throws ApiError
   */
  public deleteComment({
    companyId,
    id,
  }: {
    /**
     * ID of the company
     */
    companyId: string,
    /**
     * ID of the comment
     */
    id: string,
  }): CancelablePromise<SuccessResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/companies/{companyId}/comments/{id}',
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
