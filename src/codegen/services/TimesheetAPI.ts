/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTimesheetPayLoad } from '../models/CreateTimesheetPayLoad';
import type { CreateTimesheetResponse } from '../models/CreateTimesheetResponse';
import type { IdentityResponse } from '../models/IdentityResponse';
import type { ListTimeEntriesResponse } from '../models/ListTimeEntriesResponse';
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

}
