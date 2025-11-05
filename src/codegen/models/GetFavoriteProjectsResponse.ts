/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FavoriteProjectInfo } from './FavoriteProjectInfo';

export type GetFavoriteProjectsResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * List of favorite projects
   */
  data: Array<FavoriteProjectInfo>;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};

