/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationMeta } from './PaginationMeta';
import type { Project } from './Project';

export type ListProjectsResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * List of Projects
   */
  data: Array<Project>;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
  meta: PaginationMeta;
};

