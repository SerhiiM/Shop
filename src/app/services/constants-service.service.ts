import {InjectionToken} from '@angular/core';

export const APP_CONFIG = new InjectionToken<string>('constant.service');
export const ConstantsService = { App:  'TaskManager', Ver:  '1.0' };

