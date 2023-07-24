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
 * @interface CreateClientPayload
 */
export interface CreateClientPayload {
    /**
     * Name of the client is required
     * @type {string}
     * @memberof CreateClientPayload
     */
    'name': string;
    /**
     * Client is a company
     * @type {boolean}
     * @memberof CreateClientPayload
     */
    'isCompany'?: boolean;
    /**
     * Address of the client
     * @type {string}
     * @memberof CreateClientPayload
     */
    'address'?: string;
    /**
     * contact info of the client
     * @type {Array<string>}
     * @memberof CreateClientPayload
     */
    'contactInfo'?: Array<string>;
    /**
     * Meta data of the client
     * @type {string}
     * @memberof CreateClientPayload
     */
    'metadata'?: string;
}
