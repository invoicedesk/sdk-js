/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProjectPayLoad } from '../models/CreateProjectPayLoad';
import type { CreateProjectResponse } from '../models/CreateProjectResponse';
import type { DeleteProjectResponse } from '../models/DeleteProjectResponse';
import type { GetProjectResponse } from '../models/GetProjectResponse';
import type { ListProjectsResponse } from '../models/ListProjectsResponse';
import type { UpdateProjectPayload } from '../models/UpdateProjectPayload';
import type { UpdateProjectResponse } from '../models/UpdateProjectResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List projects
   * Get all projects for a company, optionally filtered by client
   * @returns ListProjectsResponse
   * @throws ApiError
   */
  public listProjects({
    companyId,
    page = 1,
    limit = 20,
    search,
    clientId,
  }: {
    /**
     * Company ID for which to list projects
     */
    companyId: string,
    /**
     * Page being requested
     */
    page?: number,
    /**
     * Items to limit per page
     */
    limit?: number,
    search?: string,
    /**
     * Client ID to filter projects
     */
    clientId?: string,
  }): CancelablePromise<ListProjectsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/projects',
      path: {
        'companyId': companyId,
      },
      query: {
        'page': page,
        'limit': limit,
        'search': search,
        'client_id': clientId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Create a project
   * Add a new project to a company
   * @returns CreateProjectResponse
   * @throws ApiError
   */
  public createProject({
    companyId,
    requestBody,
  }: {
    /**
     * Company ID for which to create a project
     */
    companyId: string,
    requestBody: CreateProjectPayLoad,
  }): CancelablePromise<CreateProjectResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/projects',
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
   * Get project by ID
   * Fetch the details of a specific project by its ID
   * @returns GetProjectResponse
   * @throws ApiError
   */
  public getProject({
    companyId,
    projectId,
  }: {
    /**
     * Company ID the project belongs to
     */
    companyId: string,
    /**
     * ID of the project to retrieve
     */
    projectId: string,
  }): CancelablePromise<GetProjectResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/projects/{projectId}',
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
   * Update a project
   * Update an existing project for a company
   * @returns UpdateProjectResponse
   * @throws ApiError
   */
  public updateProject({
    companyId,
    projectId,
    requestBody,
  }: {
    /**
     * Company ID for which to update a project
     */
    companyId: string,
    /**
     * Project ID to update
     */
    projectId: string,
    requestBody: UpdateProjectPayload,
  }): CancelablePromise<UpdateProjectResponse> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/companies/{companyId}/projects/{projectId}',
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
   * Remove a project
   * Remove a project from a company.
   * @returns DeleteProjectResponse
   * @throws ApiError
   */
  public deleteProject({
    companyId,
    projectId,
  }: {
    /**
     * Company ID for which to remove a project
     */
    companyId: string,
    /**
     * Project ID to delete
     */
    projectId: string,
  }): CancelablePromise<DeleteProjectResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/companies/{companyId}/projects/{projectId}',
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

}
