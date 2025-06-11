/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TimeSheet } from './TimeSheet';

export type ListTimeEntriesResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * List of Time Entries for the Project
   */
  data: Array<TimeSheet>;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};

