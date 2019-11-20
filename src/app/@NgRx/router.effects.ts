import {Injectable} from '@angular/core';
import { tap} from 'rxjs/operators';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';

@Injectable()
export class RouterEffects {
  go = createEffect(() => this.actions$.pipe(
    ofType('[Product Component] Navigate to details'),
    tap((data: {path: string[]}) => {
      this.router.navigate(data.path);
    })
    ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private router: Router
  ) {
  }
}
