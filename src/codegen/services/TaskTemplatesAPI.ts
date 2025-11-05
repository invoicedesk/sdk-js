/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTaskTemplateRequestBody } from '../models/CreateTaskTemplateRequestBody';
import type { CreateTaskTemplateResponse } from '../models/CreateTaskTemplateResponse';
import type { IdentityResponse } from '../models/IdentityResponse';
import type { ListTaskTemplatesResponse } from '../models/ListTaskTemplatesResponse';
import type { UpdateTaskTemplateRequestBody } from '../models/UpdateTaskTemplateRequestBody';
import type { UpdateTaskTemplateResponse } from '../models/UpdateTaskTemplateResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TaskTemplatesAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get task templates
   * Get all task templates for a company
   * @returns ListTaskTemplatesResponse
   * @throws ApiError
   */
  public getTaskTemplates({
    companyId,
  }: {
    /**
     * Company ID for which to retrieve task templates
     */
    companyId: string,
  }): CancelablePromise<ListTaskTemplatesResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/task-templates',
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
   * Create a task template
   * Create a task template for a company
   * @returns CreateTaskTemplateResponse
   * @throws ApiError
   */
  public createTaskTemplate({
    companyId,
    requestBody,
  }: {
    /**
     * Company ID for which to create a task template
     */
    companyId: string,
    requestBody: CreateTaskTemplateRequestBody,
  }): CancelablePromise<CreateTaskTemplateResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/task-templates',
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
   * Update task template
   * Updates an existing task template
   * @returns UpdateTaskTemplateResponse
   * @throws ApiError
   */
  public updateTaskTemplate({
    companyId,
    templateId,
    requestBody,
  }: {
    /**
     * Company ID for which to update the task template
     */
    companyId: string,
    /**
     * ID of the task template to update
     */
    templateId: string,
    requestBody: UpdateTaskTemplateRequestBody,
  }): CancelablePromise<UpdateTaskTemplateResponse> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/companies/{companyId}/task-templates/{templateId}',
      path: {
        'companyId': companyId,
        'templateId': templateId,
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
   * Delete task template
   * Delete a task template
   * @returns IdentityResponse
   * @throws ApiError
   */
  public deleteTaskTemplate({
    companyId,
    templateId,
  }: {
    /**
     * Company ID of the task template
     */
    companyId: string,
    /**
     * ID of the task template to delete
     */
    templateId: string,
  }): CancelablePromise<IdentityResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/companies/{companyId}/task-templates/{templateId}',
      path: {
        'companyId': companyId,
        'templateId': templateId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

}
