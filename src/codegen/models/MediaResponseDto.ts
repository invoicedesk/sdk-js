/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FolderResponseDto } from './FolderResponseDto';
import type { ProjectResponseDto } from './ProjectResponseDto';
import type { UserResponseDto } from './UserResponseDto';

export type MediaResponseDto = {
  /**
   * Media ID
   */
  id: string;
  /**
   * Media name
   */
  name: string;
  /**
   * File size in bytes
   */
  fileSize: number;
  /**
   * MIME type
   */
  mimeType: string;
  /**
   * The type of media
   */
  type: string;
  /**
   * Company ID
   */
  companyId: string;
  /**
   * Associated project
   */
  project: ProjectResponseDto;
  /**
   * User who uploaded the media
   */
  uploader: UserResponseDto;
  /**
   * Creation timestamp
   */
  createdAt: string;
  /**
   * Last update timestamp
   */
  updatedAt: string;
  /**
   * Associated folder
   */
  folder: FolderResponseDto;
  /**
   * Google Drive file ID
   */
  driveFileId?: string;
  /**
   * Whether this is a Google Drive file
   */
  isDriveFile: boolean;
  /**
   * Google Drive parent folder ID
   */
  driveParentFolderId?: string;
  /**
   * Thumbnail URL
   */
  thumbnailUrl?: string;
  /**
   * Presigned URL for accessing the file
   */
  presignedUrl?: string;
  /**
   * Width of the media asset
   */
  width: number;
  /**
   * Height of the media asset
   */
  height: number;
  /**
   * Width of the thumnail of asset
   */
  thumbnailWidth: number;
  /**
   * Height of the thumnail of asset
   */
  thumbnailHeight: number;
  version: Record<string, any>;
};

