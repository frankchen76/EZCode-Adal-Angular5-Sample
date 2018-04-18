import { Component, OnInit } from '@angular/core';
import { MsgraphService } from '../services/msgraph.service';
import { IJsonObject } from '../services/IJsonObject';

@Component({
    selector: 'app-msgraph',
    templateUrl: './msgraph.component.html',
    styleUrls: ['./msgraph.component.css']
})
export class MsgraphComponent implements OnInit {
    private _jsonResult:IJsonObject[];
    private _loading:boolean;
    constructor(private msGraphService: MsgraphService) { }

    ngOnInit() {
    }
    test(){
        this._loading=true;
        this.msGraphService.getMe()
        .subscribe(jsonUserObjects=>{
            this._jsonResult = jsonUserObjects;
            this._loading=false;
        });
    }
}
