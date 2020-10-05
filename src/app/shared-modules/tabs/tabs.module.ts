import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabsDirective } from './tabs.directive';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [TabsComponent, TabsDirective],
  imports: [CommonModule, MatTabsModule],
  entryComponents: [TabsComponent],
  exports: [TabsComponent],
})
export class TabsModule {}
