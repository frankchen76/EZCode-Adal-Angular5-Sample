import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { IAllowance } from './IAllowance';

@Injectable()
export class OrderService {
    private _headers: HttpHeaders;

    constructor(private httpClient: HttpClient) {
        this._headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    /**
     * getOrders
     */
    public getOrders(): Observable<IAllowance[]> {
        const url = "[https://localhost:3343/api/allowance]";

        return this.httpClient.get<IAllowance[]>(url, { headers: this._headers })
            .pipe(
                tap(heroes => this.log('fetched heroes')),
                catchError(this.handleError('getAllowances', []))
            );
    }
    public getMockOrders(): Observable<IAllowance[]>{
        const ret = new Array<IAllowance>();
        ret.push({
            Id: 1,
            Title: "test",
            Amount: 2.44,
            User: "frank chen",
            IssueDate: new Date()
        });
        return Observable.of(ret);
    }

    private handleError<T>(operation = 'operation', result?: T) {
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
    private log(message: string) {
        //this.messageService.add('HeroService: ' + message);
        console.log(message);
    }
}