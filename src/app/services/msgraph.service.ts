import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { IAllowance } from './IAllowance';
import { BaseService } from './base.service';
import { IJsonObject } from './IJsonObject';


@Injectable()
export class MsgraphService extends BaseService  {

    constructor(httpClient: HttpClient) {
        super(httpClient);
    }
    /**
     * getOrders
     */
    public getMe(): Observable<IJsonObject[]> {
        const url = "https://graph.microsoft.com/v1.0/me";

        //return the body json text. 
        return this.httpClient.get<any>(url, { headers: this._headers, observe: 'response' })
            .pipe(
                tap(result => this.log('fetched heroes')),
                catchError(this.handleError('getMe', [])),
                map((response:HttpResponse<any>)=>{
                    return this.getJsonObject(response.body);
                })
            );
        // return this.httpClient.get(url, { headers: this._headers, responseType:"text" })
        //     .pipe(
        //         tap(result => this.log('fetched heroes')),
        //         catchError(this.handleError('getMe', [])),
        //         map((response)=>{
        //             return response.toString();
        //         })
        //     );
            
    }
    // public getMe(): Observable<string> {
    //     const url = "https://graph.microsoft.com/v1.0/me";

    //     return this.httpClient.get<HttpResponse<string>>(url, { headers: this._headers })
    //         .pipe(
    //             tap(result => this.log('fetched heroes')),
    //             catchError(this.handleError('getMe', []))
    //             map((response:HttpResponse<string>)=>{
    //                 return (string)response;
    //             })
    //         );
    //     // return this.httpClient.get<HttpResponse<string>>(url, { headers: this._headers })
    //     // .map(response=>response.body);
            
    // }

}