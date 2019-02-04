import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
} from '@angular/material';
const modules = [
  CommonModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
];
@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}
