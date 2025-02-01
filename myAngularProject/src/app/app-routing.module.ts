import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';
import { CreatenameComponent } from './components/createname/createname.component';
import { ParentComponent } from './components/parent/parent.component';
import { ReadnameComponent } from './components/readname/readname.component';
import { ValidateComponent } from './components/validate/validate.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ComputerpiecesComponent } from './components/computerpieces/computerpieces.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full" },
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "child", component: ChildComponent},
  {path: "creatname", component: CreatenameComponent},
  {path: "parent", component: ParentComponent},
  {path: "readname", component: ReadnameComponent},
  {path: "validate", component: ValidateComponent},
  {path: "computer", component: ComputerpiecesComponent},
  {path: "computer/:piece", component: ComputerpiecesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
