/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTimesheetPayLoad = {
  /**
   * Description of the  timesheet
   */
  description?: string;
  /**
   * Start date of the timesheet
   */
  startTime: string;
  /**
   * End date of the timesheet
   */
  endTime?: string;
  /**
   * Status of the task being created
   */
  status: CreateTimesheetPayLoad.status;
  /**
   * ID of the user this task has been assigned to
   */
  assigneeId?: string;
  /**
   * The date this task is due by
   */
  dueDate?: string;
};

export namespace CreateTimesheetPayLoad {

  /**
   * Status of the task being created
   */
  export enum status {
    BACKLOG = 'backlog',
    TODO = 'todo',
    IN_PROGRESS = 'in_progress',
    DONE = 'done',
  }


}

