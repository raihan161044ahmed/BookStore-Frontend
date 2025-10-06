import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../core/services/book.service';
import { Book } from '../../../../core/models/book.model';
import { BookCardComponent } from "../../book-card/book-card/book-card";

@Component({
  selector: 'app-book-list',
  standalone: true, 
  templateUrl: './book-list.html',
  imports: [BookCardComponent],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  loading = true;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe({
      next: data => {
        this.books = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
}
