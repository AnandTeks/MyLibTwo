import { NgModule } from '@angular/core';
import { MyLibtwoComponent } from './my-libtwo.component';
import { Routes,RouterModule } from '@angular/router';


const routes: Routes = [{path:'', component: MyLibtwoComponent}];
export const routerModule = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    MyLibtwoComponent
  ],
  imports: [
    routerModule
  ],
  exports: [
    MyLibtwoComponent
  ]
})
export class MyLibtwoModule { }
