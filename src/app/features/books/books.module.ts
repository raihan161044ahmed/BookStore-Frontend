import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { BookListComponent } from '../books/pages/book-list/book-list';
import { BookDetailComponent } from '../books/pages/book-detail/book-detail';
import { BookCreateComponent } from '../books/pages/book-create/book-create';
import { BookCardComponent } from '../books/book-card/book-card/book-card';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'create', component: BookCreateComponent },
  { path: ':id', component: BookDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,BookListComponent,BookCardComponent,BookDetailComponent,BookCreateComponent,
    RouterModule.forChild(routes)
  ]
})
export class Books {}
