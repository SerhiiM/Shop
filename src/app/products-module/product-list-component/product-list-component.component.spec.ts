import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponentComponent } from './product-list-component.component';
import { ProductComponent } from '../product-component/product-component.component';
import {RouterModule} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {provideMockStore} from '@ngrx/store/testing';

describe('ProductListComponent', () => {
  let component: ProductListComponentComponent;
  let fixture: ComponentFixture<ProductListComponentComponent>;

  const initialState = {
    products: [],
    cart: []
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponentComponent, ProductComponent ],
      imports: [
        RouterModule.forRoot([])
      ],
      providers: [provideMockStore({ initialState }), ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.createComponent(ProductComponent);
    fixture = TestBed.createComponent(ProductListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
