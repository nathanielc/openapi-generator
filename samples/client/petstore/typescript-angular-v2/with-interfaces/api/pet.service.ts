/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams,
        RequestMethod, RequestOptions, RequestOptionsArgs,
        Response, ResponseContentType, QueryEncoder }        from '@angular/http';
import { CustomQueryEncoderHelper }                          from '../encoder';
import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { ApiResponse } from '../model/models';
import { Pet } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {
    PetServiceInterface
} from './pet.serviceInterface';



@Injectable()
export class PetService implements PetServiceInterface {

    protected basePath = 'http://petstore.swagger.io/v2';
    public defaultHeaders = new Headers();
    public configuration = new Configuration();
    public encoder: QueryEncoder;

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomQueryEncoderHelper();
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    /**
     * 
     * @summary Add a new pet to the store
     
     * @param body Pet object that needs to be added to the store
     */
    public addPet(body: Pet, extraHttpRequestParams?: RequestOptionsArgs): Observable<{}> {
        return this.addPetWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Deletes a pet
     
     * @param petId Pet id to delete
     * @param apiKey 
     */
    public deletePet(petId: number, apiKey?: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<{}> {
        return this.deletePetWithHttpInfo(petId, apiKey, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Multiple status values can be provided with comma separated strings
     * @summary Finds Pets by status
     
     * @param status Status values that need to be considered for filter
     */
    public findPetsByStatus(status: Array<'available' | 'pending' | 'sold'>, extraHttpRequestParams?: RequestOptionsArgs): Observable<Array<Pet>> {
        return this.findPetsByStatusWithHttpInfo(status, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @summary Finds Pets by tags
     
     * @param tags Tags to filter by
     */
    public findPetsByTags(tags: Array<string>, extraHttpRequestParams?: RequestOptionsArgs): Observable<Array<Pet>> {
        return this.findPetsByTagsWithHttpInfo(tags, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Returns a single pet
     * @summary Find pet by ID
     
     * @param petId ID of pet to return
     */
    public getPetById(petId: number, extraHttpRequestParams?: RequestOptionsArgs): Observable<Pet> {
        return this.getPetByIdWithHttpInfo(petId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Update an existing pet
     
     * @param body Pet object that needs to be added to the store
     */
    public updatePet(body: Pet, extraHttpRequestParams?: RequestOptionsArgs): Observable<{}> {
        return this.updatePetWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Updates a pet in the store with form data
     
     * @param petId ID of pet that needs to be updated
     * @param name Updated name of the pet
     * @param status Updated status of the pet
     */
    public updatePetWithForm(petId: number, name?: string, status?: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<{}> {
        return this.updatePetWithFormWithHttpInfo(petId, name, status, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary uploads an image
     
     * @param petId ID of pet to update
     * @param additionalMetadata Additional data to pass to server
     * @param file file to upload
     */
    public uploadFile(petId: number, additionalMetadata?: string, file?: Blob, extraHttpRequestParams?: RequestOptionsArgs): Observable<ApiResponse> {
        return this.uploadFileWithHttpInfo(petId, additionalMetadata, file, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object") {
            this.addToHttpParamsRecursive(httpParams, value);
        } else {
            this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Add a new pet to the store
     * @param body Pet object that needs to be added to the store
     */
    public addPetWithHttpInfo(body: Pet, extraHttpRequestParams?: RequestOptionsArgs, options?: {httpHeaderAccept?: undefined}): Observable<Response> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addPet.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers.set('Content-Type', httpContentTypeSelected);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            responseType: httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text') ? ResponseContentType.Text : ResponseContentType.Json,
            withCredentials:this.configuration.withCredentials
        });
        // issues#4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.configuration.basePath}/pet`, requestOptions);
    }

    /**
     * Deletes a pet
     * @param petId Pet id to delete
     * @param apiKey 
     */
    public deletePetWithHttpInfo(petId: number, apiKey?: string, extraHttpRequestParams?: RequestOptionsArgs, options?: {httpHeaderAccept?: undefined}): Observable<Response> {
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling deletePet.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (apiKey !== undefined && apiKey !== null) {
            headers.set('api_key', String(apiKey));
        }

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers.set('Accept', httpHeaderAcceptSelected);
        }


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            responseType: httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text') ? ResponseContentType.Text : ResponseContentType.Json,
            withCredentials:this.configuration.withCredentials
        });
        // issues#4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.configuration.basePath}/pet/${encodeURIComponent(String(petId))}`, requestOptions);
    }

    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param status Status values that need to be considered for filter
     */
    public findPetsByStatusWithHttpInfo(status: Array<'available' | 'pending' | 'sold'>, extraHttpRequestParams?: RequestOptionsArgs, options?: {httpHeaderAccept?: 'application/xml' | 'application/json'}): Observable<Response> {
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling findPetsByStatus.');
        }

        let queryParameters = new URLSearchParams('', this.encoder);
        if (status) {
            this.addToHttpParams(queryParameters,
                status.join(COLLECTION_FORMATS['csv']), 'status');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/xml',
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers.set('Accept', httpHeaderAcceptSelected);
        }


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            responseType: httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text') ? ResponseContentType.Text : ResponseContentType.Json,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // issues#4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.configuration.basePath}/pet/findByStatus`, requestOptions);
    }

    /**
     * Finds Pets by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param tags Tags to filter by
     */
    public findPetsByTagsWithHttpInfo(tags: Array<string>, extraHttpRequestParams?: RequestOptionsArgs, options?: {httpHeaderAccept?: 'application/xml' | 'application/json'}): Observable<Response> {
        if (tags === null || tags === undefined) {
            throw new Error('Required parameter tags was null or undefined when calling findPetsByTags.');
        }

        let queryParameters = new URLSearchParams('', this.encoder);
        if (tags) {
            this.addToHttpParams(queryParameters,
                tags.join(COLLECTION_FORMATS['csv']), 'tags');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/xml',
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers.set('Accept', httpHeaderAcceptSelected);
        }


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            responseType: httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text') ? ResponseContentType.Text : ResponseContentType.Json,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // issues#4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.configuration.basePath}/pet/findByTags`, requestOptions);
    }

    /**
     * Find pet by ID
     * Returns a single pet
     * @param petId ID of pet to return
     */
    public getPetByIdWithHttpInfo(petId: number, extraHttpRequestParams?: RequestOptionsArgs, options?: {httpHeaderAccept?: 'application/xml' | 'application/json'}): Observable<Response> {
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling getPetById.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // authentication (api_key) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["api_key"]) {
            headers.set('api_key', this.configuration.apiKeys["api_key"]);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/xml',
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers.set('Accept', httpHeaderAcceptSelected);
        }


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            responseType: httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text') ? ResponseContentType.Text : ResponseContentType.Json,
            withCredentials:this.configuration.withCredentials
        });
        // issues#4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.configuration.basePath}/pet/${encodeURIComponent(String(petId))}`, requestOptions);
    }

    /**
     * Update an existing pet
     * @param body Pet object that needs to be added to the store
     */
    public updatePetWithHttpInfo(body: Pet, extraHttpRequestParams?: RequestOptionsArgs, options?: {httpHeaderAccept?: undefined}): Observable<Response> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updatePet.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers.set('Content-Type', httpContentTypeSelected);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            responseType: httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text') ? ResponseContentType.Text : ResponseContentType.Json,
            withCredentials:this.configuration.withCredentials
        });
        // issues#4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.configuration.basePath}/pet`, requestOptions);
    }

    /**
     * Updates a pet in the store with form data
     * @param petId ID of pet that needs to be updated
     * @param name Updated name of the pet
     * @param status Updated status of the pet
     */
    public updatePetWithFormWithHttpInfo(petId: number, name?: string, status?: string, extraHttpRequestParams?: RequestOptionsArgs, options?: {httpHeaderAccept?: undefined}): Observable<Response> {
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling updatePetWithForm.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/x-www-form-urlencoded'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any; };
        let useForm = false;
        let convertFormParamsToString = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            // TODO: this fails if a parameter is a file, the api can't consume "multipart/form-data" and a blob is passed.
            convertFormParamsToString = true;
            formParams = new URLSearchParams('', this.encoder);
            // set the content-type explicitly to avoid having it set to 'text/plain'
            headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }

        if (name !== undefined) {
            formParams.append('name', <any>name);
        }
        if (status !== undefined) {
            formParams.append('status', <any>status);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: convertFormParamsToString ? formParams.toString() : formParams,
            responseType: httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text') ? ResponseContentType.Text : ResponseContentType.Json,
            withCredentials:this.configuration.withCredentials
        });
        // issues#4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.configuration.basePath}/pet/${encodeURIComponent(String(petId))}`, requestOptions);
    }

    /**
     * uploads an image
     * @param petId ID of pet to update
     * @param additionalMetadata Additional data to pass to server
     * @param file file to upload
     */
    public uploadFileWithHttpInfo(petId: number, additionalMetadata?: string, file?: Blob, extraHttpRequestParams?: RequestOptionsArgs, options?: {httpHeaderAccept?: 'application/json'}): Observable<Response> {
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling uploadFile.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            // TODO: this fails if a parameter is a file, the api can't consume "multipart/form-data" and a blob is passed.
            convertFormParamsToString = true;
            formParams = new URLSearchParams('', this.encoder);
            // set the content-type explicitly to avoid having it set to 'text/plain'
            headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }

        if (additionalMetadata !== undefined) {
            formParams.append('additionalMetadata', <any>additionalMetadata);
        }
        if (file !== undefined) {
            formParams.append('file', <any>file);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: convertFormParamsToString ? formParams.toString() : formParams,
            responseType: httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text') ? ResponseContentType.Text : ResponseContentType.Json,
            withCredentials:this.configuration.withCredentials
        });
        // issues#4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.configuration.basePath}/pet/${encodeURIComponent(String(petId))}/uploadImage`, requestOptions);
    }

}
