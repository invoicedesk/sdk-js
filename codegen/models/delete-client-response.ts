/* tslint:disable */
/* eslint-disable */
/**
 * Invoice Desk API Documentation
 * Official API documentation for Invoice Desk
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { APIError } from './apierror';
// May contain unused imports in some cases
// @ts-ignore
import { DeleteClientResponseData } from './delete-client-response-data';

/**
 * 
 * @export
 * @interface DeleteClientResponse
 */
export interface DeleteClientResponse {
    /**
     * Indicates whether the operation was successful or not
     * @type {boolean}
     * @memberof DeleteClientResponse
     */
    'success': boolean;
    /**
     * 
     * @type {DeleteClientResponseData}
     * @memberof DeleteClientResponse
     */
    'data': DeleteClientResponseData;
    /**
     * If the operation was not successful, holds the deatils of errors
     * @type {Array<APIError>}
     * @memberof DeleteClientResponse
     */
    'errors': Array<APIError>;
}
