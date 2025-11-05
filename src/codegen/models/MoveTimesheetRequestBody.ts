/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MoveTimesheetRequestBody = {
  /**
   * ID of the timesheet that should come before the moved timesheet (null for first position)
   */
  prevId?: string | null;
  /**
   * ID of the timesheet that should come after the moved timesheet (null for last position)
   */
  nextId?: string | null;
  /**
   * ID of the status column where the timesheet should be moved
   */
  statusId: string;
};

