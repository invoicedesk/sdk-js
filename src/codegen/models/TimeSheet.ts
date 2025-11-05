/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Project } from './Project';
import type { ProjectTaskStatus } from './ProjectTaskStatus';
import type { Tag } from './Tag';
import type { User } from './User';

export type TimeSheet = {
  /**
   * The ID of the time entry
   */
  id: string;
  /**
   * ID of the company this timesheets exists in
   */
  companyId: string;
  /**
   * ID of the project associated with this timesheet
   */
  projectId: string;
  /**
   * Short description of what was done
   */
  description: string;
  /**
   * Start Datetime of the time entry
   */
  startTime: string;
  /**
   * End Datetime of the time entry
   */
  endTime: string;
  /**
   * Date on which this task is due
   */
  dueDate: string;
  /**
   * Status of the timesheet entry (or task)
   */
  status: string;
  /**
   * Custom status details for this task
   */
  customStatus: ProjectTaskStatus;
  /**
   * Details of the project associated with this timesheet entry
   */
  project: Project;
  /**
   * User assigned to this timesheet entry
   */
  assignee: User;
  invoice: Record<string, any>;
  /**
   * Tags associated with this timesheet entry
   */
  tags: Array<Tag>;
  /**
   * Priority of this task
   */
  priority: TimeSheet.priority;
  /**
   * ID of the owner of this task
   */
  ownerId: string;
  /**
   * Owner of this task
   */
  owner: User;
  /**
   * Name of the task
   */
  name: string;
  /**
   * ID of the parent task if this is a subtask
   */
  parentTaskId: string;
  /**
   * Subtasks of this task
   */
  subtasks: Array<TimeSheet>;
  /**
   * Indicates if this task is billable
   */
  isBillable: boolean;
  /**
   * LexoRank value for ordering tasks within a status column
   */
  rank?: string;
  /**
   * Number of comments associated with this timesheet entry
   */
  commentCount: number;
};

export namespace TimeSheet {

  /**
   * Priority of this task
   */
  export enum priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    URGENT = 'urgent',
  }


}

