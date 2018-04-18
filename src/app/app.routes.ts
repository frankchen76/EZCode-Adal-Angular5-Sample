// import { ValueComponent } from './values/value.controller';
import { Component } from '@angular/core';

import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import {MsgraphComponent} from './msgraph/msgraph.component';

import {EZCodeAdalComponentGuard} from 'ezcode-adal-angular5/lib';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, //, canActivate: [EZCodeAdalComponentGuard]
  { path: 'order', component: OrderComponent, canActivate: [EZCodeAdalComponentGuard]},
  { path: 'msgraph', component: MsgraphComponent, canActivate: [EZCodeAdalComponentGuard]},
  { path: 'about', component: AboutComponent }
];

