import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {TestComponent} from './test/test.component';
import { SampleDirective } from './test/sample.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent , SampleDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
