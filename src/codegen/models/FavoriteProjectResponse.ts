/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserFavorite } from './UserFavorite';

export type FavoriteProjectResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * The favorite entry that was created or found
   */
  data: UserFavorite;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};

