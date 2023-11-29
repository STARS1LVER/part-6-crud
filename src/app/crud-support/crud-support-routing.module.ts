import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';


// - Configurations routes
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home',     component:  HomePageComponent},
      { path: 'register', component:  RegisterPageComponent },
      { path: 'table', component:  TablePageComponent },
      { path: 'edit/:id', component:  EditPageComponent},
      { path: '**',       redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CrudRoutingModule {}
