import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto.component';
import { NormalFormsComponent } from './normal-forms/normal-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NormalFormsStateComponent } from './normal-forms-state/normal-forms-state.component';

const routes: Routes = [
  {
    path: '',
    component: ContactoComponent,
    children: [
      {
        path: 'normal-forms',
        component: NormalFormsComponent,
      },
      {
        path: 'normal-forms-state',
        component: NormalFormsStateComponent,
      },
      {
        path: 'reactive-forms',
        component: ReactiveFormsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
