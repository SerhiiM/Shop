import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  @ViewChild('appTitle') title: ElementRef;
  ngOnInit() {

    // а если задействовать Renderer2? а не напрямую редактировать DOM
    this.title.nativeElement.innerText = 'Store title';
  }
}
