import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { TestComponent } from './test.component';

@Directive({
  selector: '[appSample]',
})
export class SampleDirective {
  component: TestComponent;

  constructor(private test: TestComponent) {
    this.component = test;
    this.component.username = 'overriden text';
  }

  ngAfterViewInit() {
    // Your code here
    this.component.username = 'overriden text';
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
