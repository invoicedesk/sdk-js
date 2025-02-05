/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Project } from './Project';

export type CreateProjectResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * The newly created project
   */
  data: Project;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};

