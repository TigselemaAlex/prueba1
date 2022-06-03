import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    FormsModule


  ], exports: [
    CardModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    FormsModule
  ]
})
export class SharedModule { }
