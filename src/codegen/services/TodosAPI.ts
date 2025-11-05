/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCommentRequestBody } from '../models/CreateCommentRequestBody';
import type { CreateTodoRequestBody } from '../models/CreateTodoRequestBody';
import type { CreateTodoResponse } from '../models/CreateTodoResponse';
import type { DeleteTodoResponse } from '../models/DeleteTodoResponse';
import type { GetTodoResponse } from '../models/GetTodoResponse';
import type { IdentityResponse } from '../models/IdentityResponse';
import type { ListTodosResponse } from '../models/ListTodosResponse';
import type { UpdateTodoCommentRequestBody } from '../models/UpdateTodoCommentRequestBody';
import type { UpdateTodoRequestBody } from '../models/UpdateTodoRequestBody';
import type { UpdateTodoResponse } from '../models/UpdateTodoResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TodosAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List my todos
   * Returns all todos across all your teams
   * @returns ListTodosResponse
   * @throws ApiError
   */
  public listTodos({
    page,
    limit,
    search,
    assigneeId,
    creatorId,
    priority,
    isComplete,
    dueDateFrom,
    dueDateTo,
  }: {
    /**
     * Page number for pagination
     */
    page?: number,
    /**
     * Number of items per page
     */
    limit?: number,
    /**
     * Search term for title or description
     */
    search?: string,
    /**
     * Filter by assignee ID
     */
    assigneeId?: string,
    /**
     * Filter by creator ID
     */
    creatorId?: string,
    /**
     * Filter by priority
     */
    priority?: 'low' | 'medium' | 'high' | 'urgent',
    /**
     * Filter by completion status
     */
    isComplete?: boolean,
    /**
     * Filter todos due from this date
     */
    dueDateFrom?: string,
    /**
     * Filter todos due until this date
     */
    dueDateTo?: string,
  }): CancelablePromise<ListTodosResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/todos',
      query: {
        'page': page,
        'limit': limit,
        'search': search,
        'assigneeId': assigneeId,
        'creatorId': creatorId,
        'priority': priority,
        'isComplete': isComplete,
        'dueDateFrom': dueDateFrom,
        'dueDateTo': dueDateTo,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Create a new todo
   * Create a new non-project todo for agency workflow management
   * @returns CreateTodoResponse
   * @throws ApiError
   */
  public createOperationalTask({
    requestBody,
  }: {
    requestBody: CreateTodoRequestBody,
  }): CancelablePromise<CreateTodoResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/todos',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Get todo by ID
   * Get a specific todo by its ID
   * @returns GetTodoResponse
   * @throws ApiError
   */
  public getTodo({
    todoId,
  }: {
    /**
     * Todo ID
     */
    todoId: string,
  }): CancelablePromise<GetTodoResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/todos/{todoId}',
      path: {
        'todoId': todoId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Update a todo
   * Update an existing todo
   * @returns UpdateTodoResponse
   * @throws ApiError
   */
  public updateTodo({
    updateMask,
    todoId,
    requestBody,
  }: {
    /**
     * Comma-separated list of fields to update
     */
    updateMask: string,
    /**
     * Todo ID to update
     */
    todoId: string,
    requestBody: UpdateTodoRequestBody,
  }): CancelablePromise<UpdateTodoResponse> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/todos/{todoId}',
      path: {
        'todoId': todoId,
      },
      query: {
        'updateMask': updateMask,
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
   * Delete a todo
   * Delete an existing todo
   * @returns DeleteTodoResponse
   * @throws ApiError
   */
  public deleteTodo({
    todoId,
  }: {
    /**
     * Todo ID to delete
     */
    todoId: string,
  }): CancelablePromise<DeleteTodoResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/todos/{todoId}',
      path: {
        'todoId': todoId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Add a comment to a todo
   * Adds a new comment to the specified todo. Optionally mentions users.
   * @returns IdentityResponse
   * @throws ApiError
   */
  public addTodoComment({
    todoId,
    requestBody,
  }: {
    /**
     * Todo ID to comment on
     */
    todoId: string,
    requestBody: CreateCommentRequestBody,
  }): CancelablePromise<IdentityResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/todos/{todoId}/comments',
      path: {
        'todoId': todoId,
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
   * Update a comment on a todo
   * Updates a comment on the specified todo. Optionally updates mentions.
   * @returns IdentityResponse
   * @throws ApiError
   */
  public updateTodoComment({
    todoId,
    commentId,
    requestBody,
  }: {
    /**
     * Todo ID
     */
    todoId: string,
    /**
     * Comment ID to update
     */
    commentId: string,
    requestBody: UpdateTodoCommentRequestBody,
  }): CancelablePromise<IdentityResponse> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/todos/{todoId}/comments/{commentId}',
      path: {
        'todoId': todoId,
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
   * Remove comment from todo thread
   * @returns IdentityResponse
   * @throws ApiError
   */
  public removeTodoComment({
    todoId,
    commentId,
  }: {
    /**
     * Todo ID to delete
     */
    todoId: string,
    /**
     * Comment ID to delete
     */
    commentId: string,
  }): CancelablePromise<IdentityResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/todos/{todoId}/comments/{commentId}',
      path: {
        'todoId': todoId,
        'commentId': commentId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

}
