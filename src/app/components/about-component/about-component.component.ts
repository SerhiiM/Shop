import {Component, Inject, OnInit, Optional} from '@angular/core';
import {CartService} from '../../services/cart-service.service';
import {LocalStorageService} from '../../services/local-storage-service.service';
import {ConstantsService, APP_CONFIG} from '../../services/constants-service.service';
import {APP_FACTORY, GeneratorFactory} from '../../services/generator-service.service';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css'],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: APP_CONFIG, useValue: ConstantsService },
    { provide: APP_FACTORY, useFactory: GeneratorFactory(200) }
    ]
})
export class AboutComponent implements OnInit {

  constructor(
    @Optional() public cartService: CartService,
    @Optional() public localStorageService: LocalStorageService,
    @Optional() @Inject(APP_CONFIG) public constantsService,
    @Optional() @Inject(APP_FACTORY) public generatorFactory
  ) { }

  ngOnInit() {
    if (this.localStorageService) { this.localStorageService.getSet('test'); }  }

}
