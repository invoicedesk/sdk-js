/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TimeSheet } from './TimeSheet';

export type CreateTimesheetResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * The newly created timesheet
   */
  data: TimeSheet;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};

