/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MoveProjectTaskStatusRequestBody = {
  /**
   * ID of the status that should come before the moved status (null for first position)
   */
  prevId?: string | null;
  /**
   * ID of the status that should come after the moved status (null for last position)
   */
  nextId?: string | null;
};

