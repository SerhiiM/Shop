import {createAction, props} from '@ngrx/store';

export const go = createAction('[Product Component] Navigate to details', props<{path: any [], queryParams?: any}>());
