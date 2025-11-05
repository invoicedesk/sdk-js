/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserFavorite = {
  /**
   * ID of the favorite entry
   */
  id: string;
  /**
   * ID of the user who favorited this item
   */
  userId: string;
  /**
   * ID of the item being favorited
   */
  favoritableId: string;
  /**
   * Type of the item being favorited (e.g., Project)
   */
  favoritableType: string;
  /**
   * Timestamp at which this favorite was created
   */
  createdAt: string;
  /**
   * Timestamp at which this favorite was last updated
   */
  updatedAt: string;
};

