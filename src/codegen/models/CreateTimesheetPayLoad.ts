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
  startTime?: string;
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
  /**
   * Name of the task
   */
  taskName: string;
  /**
   * Priority of the task
   */
  priority?: CreateTimesheetPayLoad.priority;
  /**
   * Array of tag IDs to associate with this timesheet
   */
  tagIds?: Array<string>;
  /**
   * ID of the owner of this timesheet
   */
  ownerId?: string;
  /**
   * ID of the parent task if this is a subtask
   */
  parentTaskId?: string;
  /**
   * Whether this task is billable
   */
  isBillable?: boolean;
  /**
   * ID of the custom status for this task
   */
  statusId: string;
};

export namespace CreateTimesheetPayLoad {

  /**
   * Status of the task being created
   */
  export enum status {
    COMPLETE = 'complete',
    BACKLOG = 'backlog',
    TODO = 'todo',
    IN_PROGRESS = 'in_progress',
    DONE = 'done',
  }

  /**
   * Priority of the task
   */
  export enum priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    URGENT = 'urgent',
  }


}

