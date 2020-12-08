import { Directive, HostBinding, HostListener } from '@angular/core';

enum Colors {
  ArrowUp    = 'red',
  ArrowDown  = 'blue',
  ArrowRight = 'green',
  ArrowLeft  = 'orange'
};

@Directive({
  selector: '[color]'
})
export class ColorDirective {

  @HostBinding('style.color') color = 'black';
  
  @HostListener('window:keydown', ['$event']) windowKeydown($event) {
    this.color = Colors[$event.key];
  }

  constructor() { }
}