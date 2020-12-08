import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorDirective implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}