import { BaseEntity } from './../../shared';

export const enum Priority {
    'HIGH',
    'NORMAL',
    'LOW'
}

export class Task implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public priority?: Priority,
        public user?: string,
        public expirationDate?: any,
        public category?: BaseEntity,
    ) {
    }
}
