import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { ComponentFourComponent } from './component-four/component-four.component';


const routes: Routes = [
  { path: '', component: ComponentThreeComponent },
  { path: 'componentfour', component: ComponentFourComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleBRoutingModule { }
