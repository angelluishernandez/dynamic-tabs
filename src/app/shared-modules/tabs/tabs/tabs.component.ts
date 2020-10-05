import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TabsDirective } from '../tabs.directive';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  tabs = [
    {
      label: 'Tab 1',
      title: 'Tab 1 ',
      text: 'fgisuhsoghf',
    },
    {
      label: 'Tab 2',
      title: 'Tab 2 ',
      text: 'osohghodiihgoidhgdhf',
    },
  ];

  @ViewChild(TabsDirective) public dynamicHost: TabsDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public createComponent(index: number): void {
    const component = this.componentFactoryResolver.resolveComponentFactory(
      TabsDirective
    );
    this.dynamicHost.viewContainerRef.createComponent(component);
  }

  ngOnInit(): void {}
}
