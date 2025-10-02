import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../../core/services/book.service';
import { Book } from '../../../../core/models/book.model';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.html'
})
export class BookDetailComponent implements OnInit {
  book?: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.bookService.getBookById(id).subscribe(res => this.book = res);
  }
}
