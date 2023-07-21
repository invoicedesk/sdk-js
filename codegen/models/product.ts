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
import { ProductCompany } from './product-company';

/**
 * 
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * ID of the product
     * @type {string}
     * @memberof Product
     */
    'id': string;
    /**
     * ID of the company this product belongs to
     * @type {string}
     * @memberof Product
     */
    'companyId': string;
    /**
     * Name of the product
     * @type {string}
     * @memberof Product
     */
    'name': string;
    /**
     * Short description of the product
     * @type {string}
     * @memberof Product
     */
    'description': string;
    /**
     * Harmonised System of Nomenclature (HSN) code
     * @type {string}
     * @memberof Product
     */
    'hsn': string;
    /**
     * Price of the product
     * @type {number}
     * @memberof Product
     */
    'price': number;
    /**
     * Units in which this product is sold
     * @type {string}
     * @memberof Product
     */
    'units': string;
    /**
     * Arbitrary metadata attached to this product
     * @type {string}
     * @memberof Product
     */
    'metadata': string;
    /**
     * 
     * @type {ProductCompany}
     * @memberof Product
     */
    'company': ProductCompany;
    /**
     * Timestamp at which this product was created
     * @type {string}
     * @memberof Product
     */
    'createdAt': string;
    /**
     * Timestamp at which this product was deleted
     * @type {string}
     * @memberof Product
     */
    'deletedAt': string;
}

