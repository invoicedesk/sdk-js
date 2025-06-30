/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UploadMediaRequestBody = {
  /**
   * Project ID to associate the media with (optional)
   */
  projectId?: string;
  /**
   * Folder ID to upload the media to (optional)
   */
  folderId?: string;
  /**
   * Files to upload
   */
  files: Array<Blob>;
};

