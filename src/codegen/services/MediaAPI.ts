/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteMediaResponse } from '../models/DeleteMediaResponse';
import type { GetMediaResponse } from '../models/GetMediaResponse';
import type { ListMediaResponse } from '../models/ListMediaResponse';
import type { UpdateMediaRequestBody } from '../models/UpdateMediaRequestBody';
import type { UpdateMediaResponse } from '../models/UpdateMediaResponse';
import type { UploadMediaRequestBody } from '../models/UploadMediaRequestBody';
import type { UploadMediaResponse } from '../models/UploadMediaResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MediaAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List media files
   * Get all media files for a company, optionally filtered by project or type
   * @returns ListMediaResponse
   * @throws ApiError
   */
  public listMedia({
    companyId,
    page = 1,
    limit = 20,
    search,
    type,
    projectId,
    folderId,
  }: {
    /**
     * Company ID for which to list media
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
     * Media type to filter
     */
    type?: string,
    /**
     * Project ID to filter media
     */
    projectId?: string,
    /**
     * Folder ID to filter media
     */
    folderId?: string,
  }): CancelablePromise<ListMediaResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/media',
      path: {
        'companyId': companyId,
      },
      query: {
        'page': page,
        'limit': limit,
        'search': search,
        'type': type,
        'project_id': projectId,
        'folder_id': folderId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Upload media files
   * Upload one or more media files to a company
   * @returns UploadMediaResponse
   * @throws ApiError
   */
  public uploadMedia({
    companyId,
    formData,
  }: {
    /**
     * Company ID for which to upload media
     */
    companyId: string,
    formData: UploadMediaRequestBody,
  }): CancelablePromise<UploadMediaResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/media/upload',
      path: {
        'companyId': companyId,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * List media folders
   * Get all media folders for a company, optionally filtered by project or parent folder
   * @returns ListMediaResponse
   * @throws ApiError
   */
  public listMediaFolders({
    companyId,
    page = 1,
    limit = 20,
    search,
    projectId,
    parentFolderId,
  }: {
    /**
     * Company ID for which to list media folders
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
     * Project ID to filter folders
     */
    projectId?: string,
    /**
     * Parent folder ID to filter subfolders
     */
    parentFolderId?: string,
  }): CancelablePromise<ListMediaResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/media/folders',
      path: {
        'companyId': companyId,
      },
      query: {
        'page': page,
        'limit': limit,
        'search': search,
        'project_id': projectId,
        'parent_folder_id': parentFolderId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Create a media folder
   * Create a new media folder for a company
   * @returns GetMediaResponse
   * @throws ApiError
   */
  public createMediaFolder({
    companyId,
  }: {
    /**
     * Company ID for which to create media folder
     */
    companyId: string,
  }): CancelablePromise<GetMediaResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies/{companyId}/media/folders',
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
   * Get media by ID
   * Fetch the details of a specific media file by its ID
   * @returns GetMediaResponse
   * @throws ApiError
   */
  public getMedia({
    companyId,
    mediaId,
  }: {
    /**
     * Company ID the media belongs to
     */
    companyId: string,
    /**
     * ID of the media to retrieve
     */
    mediaId: string,
  }): CancelablePromise<GetMediaResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/media/{mediaId}',
      path: {
        'companyId': companyId,
        'mediaId': mediaId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Update a media file
   * Update an existing media file for a company
   * @returns UpdateMediaResponse
   * @throws ApiError
   */
  public updateMedia({
    companyId,
    mediaId,
    requestBody,
  }: {
    /**
     * Company ID for which to update media
     */
    companyId: string,
    /**
     * Media ID to update
     */
    mediaId: string,
    requestBody: UpdateMediaRequestBody,
  }): CancelablePromise<UpdateMediaResponse> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/companies/{companyId}/media/{mediaId}',
      path: {
        'companyId': companyId,
        'mediaId': mediaId,
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
   * Remove a media file
   * Remove a media file from a company.
   * @returns DeleteMediaResponse
   * @throws ApiError
   */
  public deleteMedia({
    companyId,
    mediaId,
  }: {
    /**
     * Company ID for which to remove media
     */
    companyId: string,
    /**
     * Media ID to delete
     */
    mediaId: string,
  }): CancelablePromise<DeleteMediaResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/companies/{companyId}/media/{mediaId}',
      path: {
        'companyId': companyId,
        'mediaId': mediaId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Get root media folders
   * Get all root-level media folders for a company
   * @returns ListMediaResponse
   * @throws ApiError
   */
  public getRootMediaFolders({
    companyId,
    projectId,
  }: {
    /**
     * Company ID for which to get root folders
     */
    companyId: string,
    /**
     * Project ID to filter folders
     */
    projectId?: string,
  }): CancelablePromise<ListMediaResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/media/folders/root',
      path: {
        'companyId': companyId,
      },
      query: {
        'project_id': projectId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Get media folder by ID
   * Fetch the details of a specific media folder by its ID
   * @returns GetMediaResponse
   * @throws ApiError
   */
  public getMediaFolder({
    companyId,
    folderId,
  }: {
    /**
     * Company ID the folder belongs to
     */
    companyId: string,
    /**
     * ID of the folder to retrieve
     */
    folderId: string,
  }): CancelablePromise<GetMediaResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}/media/folders/{folderId}',
      path: {
        'companyId': companyId,
        'folderId': folderId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Update a media folder
   * Update an existing media folder for a company
   * @returns UpdateMediaResponse
   * @throws ApiError
   */
  public updateMediaFolder({
    companyId,
    folderId,
  }: {
    /**
     * Company ID for which to update media folder
     */
    companyId: string,
    /**
     * Folder ID to update
     */
    folderId: string,
  }): CancelablePromise<UpdateMediaResponse> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/companies/{companyId}/media/folders/{folderId}',
      path: {
        'companyId': companyId,
        'folderId': folderId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Remove a media folder
   * Remove a media folder from a company. Folder must be empty.
   * @returns DeleteMediaResponse
   * @throws ApiError
   */
  public deleteMediaFolder({
    companyId,
    folderId,
  }: {
    /**
     * Company ID for which to remove media folder
     */
    companyId: string,
    /**
     * Folder ID to delete
     */
    folderId: string,
  }): CancelablePromise<DeleteMediaResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/companies/{companyId}/media/folders/{folderId}',
      path: {
        'companyId': companyId,
        'folderId': folderId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

}
