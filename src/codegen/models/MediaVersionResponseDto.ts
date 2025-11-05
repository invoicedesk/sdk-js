/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MediaVersionResponseDto = {
  /**
   * Version number
   */
  version: number;
  /**
   * Title of the version
   */
  title?: string;
  /**
   * Description of the version
   */
  description?: string;
  /**
   * Uploader information
   */
  uploader: Record<string, any>;
  /**
   * Creation timestamp
   */
  createdAt: string;
  /**
   * Whether this is the current active version
   */
  isCurrent: boolean;
};

