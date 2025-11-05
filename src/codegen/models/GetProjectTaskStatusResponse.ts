/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectTaskStatus } from './ProjectTaskStatus';

export type GetProjectTaskStatusResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * Project task status details
   */
  data: ProjectTaskStatus;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};

