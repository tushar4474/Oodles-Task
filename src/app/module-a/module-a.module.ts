import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleARoutingModule } from './module-a-routing.module';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';


@NgModule({
  declarations: [ComponentOneComponent, ComponentTwoComponent],
  imports: [
    CommonModule,
    ModuleARoutingModule
  ],
  exports:[
    ComponentOneComponent,
    ComponentTwoComponent
  ]
})
export class ModuleAModule { }
