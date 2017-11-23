import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { TaskComponent } from './task.component';
import { TaskDetailComponent } from './task-detail.component';
import { TaskPopupComponent } from './task-dialog.component';
import { TaskDeletePopupComponent } from './task-delete-dialog.component';

@Injectable()
export class TaskResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const taskRoute: Routes = [
    {
        path: 'task',
        component: TaskComponent,
        resolve: {
            'pagingParams': TaskResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'codemotionApp.task.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'task/:id',
        component: TaskDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'codemotionApp.task.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const taskPopupRoute: Routes = [
    {
        path: 'task-new',
        component: TaskPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'codemotionApp.task.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'task/:id/edit',
        component: TaskPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'codemotionApp.task.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'task/:id/delete',
        component: TaskDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'codemotionApp.task.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
