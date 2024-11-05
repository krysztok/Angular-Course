import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';

// ng g m search
// ng g c search

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
