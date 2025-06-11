/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Client } from './Client';
import type { Company } from './Company';
import type { ProjectTeamMember } from './ProjectTeamMember';
import type { Tag } from './Tag';

export type Project = {
  /**
   * ID of the project
   */
  id: string;
  /**
   * ID of the client associated with this project
   */
  clientId: string;
  /**
   * company ID associated with this project
   */
  companyId: string;
  /**
   * Name of the project
   */
  name: string;
  /**
   * Description of the project
   */
  description: string;
  /**
   * Details of the client associated with this project
   */
  client?: Client;
  /**
   * Details of the company associated with this project
   */
  company: Company;
  /**
   * Timestamp at which this project was created
   */
  createdAt: string;
  /**
   * Timestamp at which this project was last updated
   */
  updatedAt: string;
  /**
   * Timestamp at which this project was deleted
   */
  deletedAt: string;
  /**
   * The current status of the project
   */
  status: Project.status;
  /**
   * The timesheets for this project
   */
  timesheets: Array<string>;
  /**
   * Start date of the project
   */
  startDate?: string;
  /**
   * Due date of the project
   */
  dueDate?: string;
  /**
   * Hourly rate for the project
   */
  rate?: number;
  /**
   * Team members that are a part of this project
   */
  teamMembers: Array<ProjectTeamMember>;
  /**
   * Tags associated with this project
   */
  tags: Array<Tag>;
};

export namespace Project {

  /**
   * The current status of the project
   */
  export enum status {
    PENDING = 'pending',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
  }


}

