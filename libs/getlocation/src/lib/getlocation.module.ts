import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GetlocationComponent } from './getlocation/getlocation.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [GetlocationComponent],
  exports: [GetlocationComponent],
})
export class GetlocationModule {}
