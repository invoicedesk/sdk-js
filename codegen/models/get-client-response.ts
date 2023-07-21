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
import { GetClientResponseData } from './get-client-response-data';

/**
 * 
 * @export
 * @interface GetClientResponse
 */
export interface GetClientResponse {
    /**
     * Indicates whether the operation was successful or not
     * @type {boolean}
     * @memberof GetClientResponse
     */
    'success': boolean;
    /**
     * 
     * @type {GetClientResponseData}
     * @memberof GetClientResponse
     */
    'data': GetClientResponseData;
    /**
     * If the operation was not successful, holds the deatils of errors
     * @type {Array<APIError>}
     * @memberof GetClientResponse
     */
    'errors': Array<APIError>;
}

