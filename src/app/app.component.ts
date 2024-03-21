
import { Component,OnInit,OnDestroy,OnChanges,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked } from '@angular/core';
import {  RouterOutlet } from '@angular/router';

import { ChildComponent } from './child/child.component';

import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChildComponent,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  title = 'hooks-testcase';
  constructor(){}
  ngOnInit() {
    console.log('ngOnInit works');
  }
 
  ngOnDestroy() {
    console.log('ngOnDestroy works');
  }
 
  ngOnChanges() {
    console.log('ngOnChanges works');
  }
 
  ngAfterViewInit() {
    console.log('ngAfterViewInit works');
  }
 
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked works');
  }
 
  ngAfterContentInit() {
    console.log('ngAfterContentInit works');
  }
 
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked works');
  }
}
