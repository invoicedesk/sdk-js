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
  /**
   * IDs of tags to associate with the timesheet
   */
  tagIds?: Array<string>;
  /**
   * Priority of the timesheet entry
   */
  priority?: UpdateTimesheetRequestBody.priority;
  /**
   * Status of the task
   */
  status?: string;
  /**
   * ID of the custom status for this task
   */
  statusId?: string;
  /**
   * ID of the owner of this timesheet
   */
  ownerId?: string;
  /**
   * Title of the task
   */
  taskName?: string;
  /**
   * ID of the parent task if this is a subtask
   */
  parentTaskId?: string;
  /**
   * Whether this task is billable
   */
  isBillable?: boolean;
};

export namespace UpdateTimesheetRequestBody {

  /**
   * Priority of the timesheet entry
   */
  export enum priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    URGENT = 'urgent',
  }


}

