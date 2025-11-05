/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProjectPayLoad } from '../models/CreateProjectPayLoad';
import type { CreateProjectResponse } from '../models/CreateProjectResponse';
import type { CreateProjectTaskStatusRequestBody } from '../models/CreateProjectTaskStatusRequestBody';
import type { CreateProjectTaskStatusResponse } from '../models/CreateProjectTaskStatusResponse';
import type { DeleteProjectResponse } from '../models/DeleteProjectResponse';
import type { DeleteProjectTaskStatusResponse } from '../models/DeleteProjectTaskStatusResponse';
import type { FavoriteProjectResponse } from '../models/FavoriteProjectResponse';
import type { GetProjectResponse } from '../models/GetProjectResponse';
import type { GetProjectTaskStatusResponse } from '../models/GetProjectTaskStatusResponse';
import type { GetProjectTeamMembersResponse } from '../models/GetProjectTeamMembersResponse';
import type { ListProjectsResponse } from '../models/ListProjectsResponse';
import type { ListProjectTaskStatusesResponse } from '../models/ListProjectTaskStatusesResponse';
import type { MoveProjectTaskStatusRequestBody } from '../models/MoveProjectTaskStatusRequestBody';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateProjectPayload } from '../models/UpdateProjectPayload';
import type { UpdateProjectResponse } from '../models/UpdateProjectResponse';
import type { UpdateProjectTaskStatusRequestBody } from '../models/UpdateProjectTaskStatusRequestBody';
import type { UpdateProjectTaskStatusResponse } from '../models/UpdateProjectTaskStatusResponse';

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

  /**
   * Create a custom task status
   * Create a custom task status for a project
   * @returns CreateProjectTaskStatusResponse
   * @throws ApiError
   */
  public createProjectTaskStatus({
    companyId,
    projectId,
    requestBody,
  }: {
    /**
     * Company ID the project belongs to
     */
    companyId: string,
    /**
     * Project ID to create the status for
     */
    projectId: string,
    requestBody: CreateProjectTaskStatusRequestBody,
  }): CancelablePromise<CreateProjectTaskStatusResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/projects/{projectId}/task-statuses',
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
   * List custom task statuses
   * Get all custom task statuses for a project
   * @returns ListProjectTaskStatusesResponse
   * @throws ApiError
   */
  public listProjectTaskStatuses({
    companyId,
    projectId,
  }: {
    /**
     * Company ID the project belongs to
     */
    companyId: string,
    /**
     * Project ID to get statuses for
     */
    projectId: string,
  }): CancelablePromise<ListProjectTaskStatusesResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/projects/{projectId}/task-statuses',
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
   * Get a custom task status
   * Get a specific custom task status for a project
   * @returns GetProjectTaskStatusResponse
   * @throws ApiError
   */
  public getProjectTaskStatus({
    companyId,
    projectId,
    statusId,
  }: {
    /**
     * Company ID the project belongs to
     */
    companyId: string,
    /**
     * Project ID the status belongs to
     */
    projectId: string,
    /**
     * ID of the status to retrieve
     */
    statusId: string,
  }): CancelablePromise<GetProjectTaskStatusResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/projects/{projectId}/task-statuses/{statusId}',
      path: {
        'companyId': companyId,
        'projectId': projectId,
        'statusId': statusId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Update a custom task status
   * Update an existing custom task status for a project
   * @returns UpdateProjectTaskStatusResponse
   * @throws ApiError
   */
  public updateProjectTaskStatus({
    companyId,
    projectId,
    statusId,
    requestBody,
  }: {
    /**
     * Company ID the project belongs to
     */
    companyId: string,
    /**
     * Project ID the status belongs to
     */
    projectId: string,
    /**
     * ID of the status to update
     */
    statusId: string,
    requestBody: UpdateProjectTaskStatusRequestBody,
  }): CancelablePromise<UpdateProjectTaskStatusResponse> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/companies/{companyId}/projects/{projectId}/task-statuses/{statusId}',
      path: {
        'companyId': companyId,
        'projectId': projectId,
        'statusId': statusId,
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
   * Delete a custom task status
   * Delete a custom task status from a project. Cannot delete if tasks are using this status.
   * @returns DeleteProjectTaskStatusResponse
   * @throws ApiError
   */
  public deleteProjectTaskStatus({
    companyId,
    projectId,
    statusId,
  }: {
    /**
     * Company ID the project belongs to
     */
    companyId: string,
    /**
     * Project ID the status belongs to
     */
    projectId: string,
    /**
     * ID of the status to delete
     */
    statusId: string,
  }): CancelablePromise<DeleteProjectTaskStatusResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/companies/{companyId}/projects/{projectId}/task-statuses/{statusId}',
      path: {
        'companyId': companyId,
        'projectId': projectId,
        'statusId': statusId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Move project task status
   * Move a project task status to a new position using lexorank
   * @returns UpdateProjectTaskStatusResponse
   * @throws ApiError
   */
  public moveProjectTaskStatus({
    companyId,
    projectId,
    statusId,
    requestBody,
  }: {
    /**
     * Company ID the project belongs to
     */
    companyId: string,
    /**
     * Project ID the status belongs to
     */
    projectId: string,
    /**
     * ID of the status to move
     */
    statusId: string,
    requestBody: MoveProjectTaskStatusRequestBody,
  }): CancelablePromise<UpdateProjectTaskStatusResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/projects/{projectId}/task-statuses/{statusId}/move',
      path: {
        'companyId': companyId,
        'projectId': projectId,
        'statusId': statusId,
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
   * List project team members
   * Get all team members assigned to a project
   * @returns GetProjectTeamMembersResponse
   * @throws ApiError
   */
  public listProjectTeamMembers({
    companyId,
    projectId,
    include,
  }: {
    /**
     * Company ID the project belongs to
     */
    companyId: string,
    /**
     * Project ID to get team members for
     */
    projectId: string,
    /**
     * Related entities to include (e.g., tasks)
     */
    include?: 'tasks',
  }): CancelablePromise<GetProjectTeamMembersResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/projects/{projectId}/team-members',
      path: {
        'companyId': companyId,
        'projectId': projectId,
      },
      query: {
        'include': include,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Add project to user's favorites
   * Mark a project as favorite for the current user
   * @returns FavoriteProjectResponse
   * @throws ApiError
   */
  public favoriteProject({
    companyId,
    projectId,
  }: {
    /**
     * Company ID the project belongs to
     */
    companyId: string,
    /**
     * Project ID to favorite
     */
    projectId: string,
  }): CancelablePromise<FavoriteProjectResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/projects/{projectId}/favorite',
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
   * Remove project from user's favorites
   * Remove a project from the current user's favorites
   * @returns SuccessResponse
   * @throws ApiError
   */
  public unfavoriteProject({
    companyId,
    projectId,
  }: {
    /**
     * Company ID the project belongs to
     */
    companyId: string,
    /**
     * Project ID to unfavorite
     */
    projectId: string,
  }): CancelablePromise<SuccessResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/companies/{companyId}/projects/{projectId}/favorite',
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
   * Remove team member from project
   * Remove a team member from a specific project
   * @returns SuccessResponse
   * @throws ApiError
   */
  public removeProjectTeamMember({
    companyId,
    projectId,
    memberId,
  }: {
    /**
     * Company ID the project belongs to
     */
    companyId: string,
    /**
     * Project ID to remove the member from
     */
    projectId: string,
    /**
     * ID of the team member to remove from the project
     */
    memberId: string,
  }): CancelablePromise<SuccessResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/companies/{companyId}/projects/{projectId}/team-members/{memberId}',
      path: {
        'companyId': companyId,
        'projectId': projectId,
        'memberId': memberId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

}
