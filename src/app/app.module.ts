import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { rootRouterConfig } from './app.routes';

import { EZCodeAdalModule, EZCodeAdalService} from 'ezcode-adal-angular5/lib';

import { LoadingModule } from 'ngx-loading';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { OrderService } from './services/order.service';

//import config for local.
import { ezcodeAdalConfigLocal } from './services/ezcodeAdalConfig.local';
import { MsgraphComponent } from './msgraph/msgraph.component';
import { MsgraphService } from './services/msgraph.service';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        OrderComponent,
        NavMenuComponent,
        MsgraphComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        EZCodeAdalModule.forRoot(ezcodeAdalConfigLocal),
        // AlertModule.forRoot(),
        LoadingModule,
        RouterModule.forRoot(rootRouterConfig, { useHash: true })
    ],
    providers: [
        EZCodeAdalService,
        OrderService,
        MsgraphService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
