import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from '../books/pages/book-list/book-list';
import { BookDetailComponent } from '../books/pages/book-detail/book-detail';
import { BookCreateComponent } from '../books/pages/book-create/book-create';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'create', component: BookCreateComponent },
  { path: ':id', component: BookDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class Books {}
