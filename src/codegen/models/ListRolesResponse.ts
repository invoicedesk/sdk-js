/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Role } from './Role';

export type ListRolesResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * List of roles
   */
  data: Array<Role>;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};

