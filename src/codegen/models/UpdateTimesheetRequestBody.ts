/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateTimesheetRequestBody = {
  /**
   * Description of the time entry
   */
  description?: string;
  /**
   * Start time of the time entry. Can be null
   */
  startTime?: string;
  /**
   * End time of the time entry. Can be null
   */
  endTime?: string;
  /**
   * ID of the user this task should be assigned to
   */
  assigneeId?: string;
  /**
   * Date by which the task is due
   */
  dueDate?: string;
};

