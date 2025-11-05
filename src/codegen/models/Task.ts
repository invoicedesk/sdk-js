/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectTaskStatus } from './ProjectTaskStatus';

export type Task = {
  /**
   * The ID of the task
   */
  id: string;
  /**
   * ID of the company this timesheet exists in
   */
  companyId: string;
  /**
   * ID of the project associated with this timesheet
   */
  projectId: string;
  /**
   * Name of the task
   */
  name: string;
  /**
   * Short description of what was done
   */
  description: string;
  /**
   * Status of the timesheet entry (or task)
   */
  status: string;
  /**
   * Custom status details for this task
   */
  customStatus: ProjectTaskStatus;
};

