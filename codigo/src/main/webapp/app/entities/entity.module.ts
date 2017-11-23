import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CodemotionTaskModule } from './task/task.module';
import { CodemotionCategoryModule } from './category/category.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        CodemotionTaskModule,
        CodemotionCategoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CodemotionEntityModule {}
