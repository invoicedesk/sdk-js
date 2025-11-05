/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UnsyncFoldersRequestBody } from '../models/UnsyncFoldersRequestBody';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GoogleDriveAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any
   * @throws ApiError
   */
  public googleDriveControllerGetAuthUrl(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/integrations/google-drive/auth-url',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public googleDriveControllerGetConnectionStatus(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/integrations/google-drive/connection-status',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public googleDriveControllerDisconnectDrive(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/companies/{companyId}/integrations/google-drive/disconnect',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public googleDriveControllerGetDriveFolders({
    driveId,
    parentId,
  }: {
    driveId: string,
    parentId: string,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/integrations/google-drive/folders',
      query: {
        'driveId': driveId,
        'parentId': parentId,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public googleDriveControllerSelectFolders(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/integrations/google-drive/folders',
    });
  }

  /**
   * Unsync Google Drive folders
   * Removes sync configuration for specified Google Drive folders and deletes all associated media, subfolders, and comments.
   * @returns SuccessResponse
   * @throws ApiError
   */
  public unsyncFolders({
    companyId,
    requestBody,
  }: {
    /**
     * Company ID
     */
    companyId: string,
    requestBody: UnsyncFoldersRequestBody,
  }): CancelablePromise<SuccessResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/companies/{companyId}/integrations/google-drive/folders',
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
   * @returns any
   * @throws ApiError
   */
  public googleDriveControllerGetSharedDrives(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/integrations/google-drive/drives',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public googleDriveControllerGetSelectedFolders(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/integrations/google-drive/selected-folders',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public googleDriveControllerSyncDrive(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/integrations/google-drive/sync',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public googleDriveControllerCleanupDeletedFiles(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/integrations/google-drive/cleanup',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public googleDriveControllerGetSyncStatus(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/integrations/google-drive/sync-status',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public googleDriveControllerStreamFile({
    fileId,
    versionId,
  }: {
    fileId: string,
    versionId: string,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/integrations/google-drive/files/{fileId}/stream',
      path: {
        'fileId': fileId,
      },
      query: {
        'versionId': versionId,
      },
    });
  }

}
