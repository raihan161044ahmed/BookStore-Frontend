import { Component, Input } from '@angular/core';
import { Book } from '../../../../core/models/book.model';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-book-card',
  templateUrl: './book-card.html'
})
export class BookCardComponent {
  @Input() book!: Book;
}
