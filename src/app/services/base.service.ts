import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { IAllowance } from './IAllowance';
import {IJsonObject} from './IJsonObject';

@Injectable()
export class BaseService {
    protected _headers: HttpHeaders;

    constructor(protected httpClient: HttpClient) {
        this._headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }

    protected handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    protected log(message: string) {
        //this.messageService.add('HeroService: ' + message);
        console.log(message);
    }
    protected getJsonObject(json: any) {
        let ret = new Array<IJsonObject>();
        for (let key in json) {
            ret.push({
                name: key.toString(),
                value: json[key] == null ? "" : json[key].toString()
            });
        }
        return ret;
    }
}