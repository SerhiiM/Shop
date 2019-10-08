import {InjectionToken} from '@angular/core';

export const APP_FACTORY = new InjectionToken<string>('generatorFactory.service');
export function GeneratorFactory(n: number) {
    return () => Math.random() * n + ' result';
}
