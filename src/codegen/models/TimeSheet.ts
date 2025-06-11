/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Project } from './Project';
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
   * Details of the project associated with this timesheet entry
   */
  project: Project;
  /**
   * User assigned to this timesheet entry
   */
  assignee: User;
  invoice: Record<string, any>;
};

