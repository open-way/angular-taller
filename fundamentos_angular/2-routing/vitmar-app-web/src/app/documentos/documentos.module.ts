import { NgModule } from '@angular/core';
import { DocumentosRoutingModule } from './documentos-routing.module';
import { DocumentosComponent } from './documentos.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DocumentosRoutingModule,
  ],
  declarations: [
    DocumentosComponent,
  ]
})
export class DocumentosModule { }
