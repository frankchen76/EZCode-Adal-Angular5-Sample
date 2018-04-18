import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { OrderService } from '../services/order.service';
import {IAllowance} from '../services/IAllowance';

import {EZCodeAdalService} from 'ezcode-adal-angular5/lib';


@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    private _allowances:IAllowance[];
    public _loading=false;
    constructor(private orderService: OrderService, adalService: EZCodeAdalService) { 
        console.log("done.");
    }

    ngOnInit() {
        this.orderService.getMockOrders()
        .subscribe(allowances=>{
            this._allowances=allowances;
        });
    }

    test(){
        this._loading=true;
        this.orderService.getOrders()
        .subscribe(allowances=>{
            this._allowances = allowances;
            this._loading=false;
        });
    }
    testSpinner(){
        this._loading=true;
        Observable.interval(5000)
        .take(1)
        .subscribe(result=>{
            this._loading=false;
        });
    }

}
