/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTimesheetCommentRequestBody } from '../models/CreateTimesheetCommentRequestBody';
import type { CreateTimesheetPayLoad } from '../models/CreateTimesheetPayLoad';
import type { CreateTimesheetResponse } from '../models/CreateTimesheetResponse';
import type { IdentityResponse } from '../models/IdentityResponse';
import type { ListTimeEntriesResponse } from '../models/ListTimeEntriesResponse';
import type { MoveTimesheetRequestBody } from '../models/MoveTimesheetRequestBody';
import type { UpdateTimesheetCommentRequestBody } from '../models/UpdateTimesheetCommentRequestBody';
import type { UpdateTimesheetRequestBody } from '../models/UpdateTimesheetRequestBody';
import type { UpdateTimesheetResponse } from '../models/UpdateTimesheetResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TimesheetAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get time entries for a project
   * Fetch all time entries linked to a specific project
   * @returns ListTimeEntriesResponse
   * @throws ApiError
   */
  public getTimeSheetsForProject({
    companyId,
    projectId,
  }: {
    /**
     * Company ID for which to retrieve time entries for the project
     */
    companyId: string,
    /**
     * Project ID for which to retrieve time entries for
     */
    projectId: string,
  }): CancelablePromise<ListTimeEntriesResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/projects/{projectId}/timesheets',
      path: {
        'companyId': companyId,
        'projectId': projectId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Create a timesheet
   * Create a timesheet for a project
   * @returns CreateTimesheetResponse
   * @throws ApiError
   */
  public createTimesheet({
    companyId,
    projectId,
    requestBody,
  }: {
    /**
     * Company ID for which to create a timesheet
     */
    companyId: string,
    /**
     * Project ID for which to create a timesheet
     */
    projectId: string,
    requestBody: CreateTimesheetPayLoad,
  }): CancelablePromise<CreateTimesheetResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/projects/{projectId}/timesheets',
      path: {
        'companyId': companyId,
        'projectId': projectId,
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
   * Update
   * Updates an existing timesheet entry
   * @returns UpdateTimesheetResponse
   * @throws ApiError
   */
  public updateTimeEntry({
    companyId,
    projectId,
    timesheetId,
    requestBody,
  }: {
    /**
     * Company ID for which to update the timesheet
     */
    companyId: string,
    /**
     * Project ID for which to update the timesheet
     */
    projectId: string,
    /**
     * ID of the timesheet to update
     */
    timesheetId: string,
    requestBody: UpdateTimesheetRequestBody,
  }): CancelablePromise<UpdateTimesheetResponse> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/companies/{companyId}/projects/{projectId}/timesheets/{timesheetId}',
      path: {
        'companyId': companyId,
        'projectId': projectId,
        'timesheetId': timesheetId,
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
   * Delete
   * Delete a timesheet entry
   * @returns IdentityResponse
   * @throws ApiError
   */
  public deleteTimeEntry({
    companyId,
    projectId,
    timesheetId,
  }: {
    /**
     * Company ID of the associated project
     */
    companyId: string,
    /**
     * Project ID that the time entry is associated with
     */
    projectId: string,
    /**
     * ID of the timesheet to delete
     */
    timesheetId: string,
  }): CancelablePromise<IdentityResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/companies/{companyId}/projects/{projectId}/timesheets/{timesheetId}',
      path: {
        'companyId': companyId,
        'projectId': projectId,
        'timesheetId': timesheetId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Get comments for a timesheet
   * Retrieves all comments for the specified timesheet
   * @returns IdentityResponse
   * @throws ApiError
   */
  public getTimesheetComments({
    companyId,
    projectId,
    timesheetId,
  }: {
    /**
     * Company ID
     */
    companyId: string,
    /**
     * Project ID
     */
    projectId: string,
    /**
     * Timesheet ID to get comments for
     */
    timesheetId: string,
  }): CancelablePromise<IdentityResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/projects/{projectId}/timesheets/{timesheetId}/comments',
      path: {
        'companyId': companyId,
        'projectId': projectId,
        'timesheetId': timesheetId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Add a comment to a timesheet
   * Adds a new comment to the specified timesheet. Optionally mentions users who have access to the project.
   * @returns IdentityResponse
   * @throws ApiError
   */
  public addTimesheetComment({
    companyId,
    projectId,
    timesheetId,
    requestBody,
  }: {
    /**
     * Company ID
     */
    companyId: string,
    /**
     * Project ID
     */
    projectId: string,
    /**
     * Timesheet ID to comment on
     */
    timesheetId: string,
    requestBody: CreateTimesheetCommentRequestBody,
  }): CancelablePromise<IdentityResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/projects/{projectId}/timesheets/{timesheetId}/comments',
      path: {
        'companyId': companyId,
        'projectId': projectId,
        'timesheetId': timesheetId,
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
   * Update a comment on a timesheet
   * Updates a comment on the specified timesheet. Optionally updates mentions.
   * @returns IdentityResponse
   * @throws ApiError
   */
  public updateTimesheetComment({
    companyId,
    projectId,
    timesheetId,
    commentId,
    requestBody,
  }: {
    /**
     * Company ID
     */
    companyId: string,
    /**
     * Project ID
     */
    projectId: string,
    /**
     * Timesheet ID
     */
    timesheetId: string,
    /**
     * Comment ID to update
     */
    commentId: string,
    requestBody: UpdateTimesheetCommentRequestBody,
  }): CancelablePromise<IdentityResponse> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/companies/{companyId}/projects/{projectId}/timesheets/{timesheetId}/comments/{commentId}',
      path: {
        'companyId': companyId,
        'projectId': projectId,
        'timesheetId': timesheetId,
        'commentId': commentId,
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
   * Remove comment
   * Remove comment from timesheet thread
   * @returns IdentityResponse
   * @throws ApiError
   */
  public removeTimesheetComment({
    companyId,
    projectId,
    timesheetId,
    commentId,
  }: {
    /**
     * Company ID
     */
    companyId: string,
    /**
     * Project ID
     */
    projectId: string,
    /**
     * Timesheet ID
     */
    timesheetId: string,
    /**
     * Comment ID to delete
     */
    commentId: string,
  }): CancelablePromise<IdentityResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/companies/{companyId}/projects/{projectId}/timesheets/{timesheetId}/comments/{commentId}',
      path: {
        'companyId': companyId,
        'projectId': projectId,
        'timesheetId': timesheetId,
        'commentId': commentId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Summarize comments for a timesheet
   * Generates a streaming summary of all comments for the specified timesheet. Requires at least 5 comments.
   * @returns string
   * @throws ApiError
   */
  public summariseConversation({
    companyId,
    projectId,
    timesheetId,
  }: {
    /**
     * Company ID
     */
    companyId: string,
    /**
     * Project ID
     */
    projectId: string,
    /**
     * Timesheet ID to summarize comments for
     */
    timesheetId: string,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/projects/{projectId}/timesheets/{timesheetId}/summarize-comments',
      path: {
        'companyId': companyId,
        'projectId': projectId,
        'timesheetId': timesheetId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Move timesheet
   * Move a timesheet to a new position in a status column using lexorank
   * @returns UpdateTimesheetResponse
   * @throws ApiError
   */
  public moveTimesheet({
    companyId,
    projectId,
    timesheetId,
    requestBody,
  }: {
    /**
     * Company ID
     */
    companyId: string,
    /**
     * Project ID
     */
    projectId: string,
    /**
     * Timesheet ID to move
     */
    timesheetId: string,
    requestBody: MoveTimesheetRequestBody,
  }): CancelablePromise<UpdateTimesheetResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/projects/{projectId}/timesheets/{timesheetId}/move',
      path: {
        'companyId': companyId,
        'projectId': projectId,
        'timesheetId': timesheetId,
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
