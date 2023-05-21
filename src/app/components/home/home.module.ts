import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    ToolbarModule,
    PanelModule,
    AccordionModule,
    TableModule,
    DynamicDialogModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule,
    AutoFocusModule,
    ToastModule
  ]
})
export class HomeModule { }
