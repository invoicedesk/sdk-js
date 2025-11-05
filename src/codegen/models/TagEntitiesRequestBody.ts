/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TagEntitiesRequestBody = {
  /**
   * Array of tag IDs to apply
   */
  tagIds: Array<string>;
  /**
   * Type of entity being tagged.
   */
  taggableType: TagEntitiesRequestBody.taggableType;
  /**
   * Array of entity IDs to tag
   */
  taggableIds: Array<string>;
};

export namespace TagEntitiesRequestBody {

  /**
   * Type of entity being tagged.
   */
  export enum taggableType {
    PROJECT = 'PROJECT',
    TIMESHEET = 'TIMESHEET',
    TODO = 'TODO',
  }


}

