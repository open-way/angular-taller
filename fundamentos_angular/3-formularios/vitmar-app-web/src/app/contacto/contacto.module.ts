import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NormalFormsComponent } from './normal-forms/normal-forms.component';
import { FormsModule } from '@angular/forms';
import { NormalFormsStateComponent } from './normal-forms-state/normal-forms-state.component';

@NgModule({
  imports: [
    CommonModule,
    ContactoRoutingModule,
    FormsModule,
  ],
  declarations: [
    ContactoComponent,
    ReactiveFormsComponent,
    NormalFormsComponent,
    NormalFormsStateComponent,
  ]
})
export class ContactoModule { }
