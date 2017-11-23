import { BaseEntity } from './../../shared';

export class Category implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public imageContentType?: string,
        public image?: any,
        public tasks?: BaseEntity[],
    ) {
    }
}
