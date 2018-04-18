import { Component, OnInit } from '@angular/core';
import { EZCodeAdalService } from 'ezcode-adal-angular5/lib';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

    constructor(private adalService: EZCodeAdalService) {

    }

    ngOnInit() {
    }

    login() {
        this.adalService.login();
    }

    get isAuthenticated(): boolean {
        return this.adalService != undefined &&
            this.adalService != null &&
            this.adalService.userInfo != null;
    }

}
