/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TagResponse } from './TagResponse';

export type UpdateTagResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * Updated tag
   */
  data: TagResponse;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};

