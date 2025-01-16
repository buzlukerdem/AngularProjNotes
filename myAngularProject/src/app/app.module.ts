import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './components/testing/testing.component';
import { TestDirective } from './directives/test.directive';
import { TestPipe } from './pipes/test.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormTestComponent } from './components/testing/template-form-test/template-form-test.component';
import { ModelDrivenFormTestComponent } from './components/testing/model-driven-form-test/model-driven-form-test.component';
import { ValidateComponent } from './components/validate/validate.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { ListproductComponent } from './components/listproduct/listproduct.component';
import { ProductComponent } from './models/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    TestDirective,
    TestPipe,
    ParentComponent,
    ChildComponent,
    TemplateFormTestComponent,
    ModelDrivenFormTestComponent,
    ValidateComponent,
    CreateproductComponent,
    ListproductComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
