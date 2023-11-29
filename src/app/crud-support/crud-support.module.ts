import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudRoutingModule } from './crud-support-routing.module';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { FormComponent } from './components/form/form.component';
import { TablePageComponent } from './pages/table-page/table-page.component';



@NgModule({
  declarations: [
    RegisterPageComponent,
    HomePageComponent,
    EditPageComponent,
    LayoutPageComponent,
    TablePageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrudRoutingModule,
    SpinnerLoadingComponent,
    ErrorMessageComponent,
    FormComponent,

  ]
})
export class CrudSupportModule { }
