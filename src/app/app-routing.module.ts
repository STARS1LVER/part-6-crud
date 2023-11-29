import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {
      path: 'crud',
      loadChildren: () => import('./crud-support/crud-support.module').then(modulo => modulo.CrudSupportModule)
    },
    {
      path: '**',
      redirectTo: 'crud'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
