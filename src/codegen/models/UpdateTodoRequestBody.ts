/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateTodoRequestBody = {
  /**
   * Title of the todo
   */
  title?: string;
  /**
   * Detailed description of the todo
   */
  description?: string;
  /**
   * ID of the user assigned to this todo
   */
  assigneeId?: string;
  /**
   * Due date for the todo
   */
  dueDate?: string;
  /**
   * Priority level of the todo
   */
  priority?: UpdateTodoRequestBody.priority;
  /**
   * Whether the todo is complete
   */
  isComplete?: boolean;
  /**
   * Array of tag IDs to apply to this todo
   */
  tagIds?: Array<string>;
};

export namespace UpdateTodoRequestBody {

  /**
   * Priority level of the todo
   */
  export enum priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    URGENT = 'urgent',
  }


}

