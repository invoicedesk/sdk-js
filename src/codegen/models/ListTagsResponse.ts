/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TagResponse } from './TagResponse';

export type ListTagsResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * List of tags
   */
  data: Array<TagResponse>;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};

