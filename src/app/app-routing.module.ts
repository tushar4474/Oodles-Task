import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
   {path:'',redirectTo:'home',pathMatch:'full'},
  //  {path:'header',component:HeaderComponent},
   {path:'home',component:HomeComponent},
  { path: 'moduleA', loadChildren: () => import('./module-a/module-a.module').then(m => m.ModuleAModule)

  },
  { path: 'moduleB', loadChildren: () => import('./module-b/module-b.module').then(m => m.ModuleBModule)

},


];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
