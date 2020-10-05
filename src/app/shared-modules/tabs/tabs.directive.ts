import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTabsHost]',
})
export class TabsDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
