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



/**
 * 
 * @export
 * @interface Payload
 */
export interface Payload {
    /**
     * Name of the api token
     * @type {string}
     * @memberof Payload
     */
    'name': string;
    /**
     * Date when this token expires. This token will be automatically revoked beyond this date
     * @type {string}
     * @memberof Payload
     */
    'expiresAt'?: string;
    /**
     * Authorization permissions for the token
     * @type {string}
     * @memberof Payload
     */
    'abilities'?: string;
}
