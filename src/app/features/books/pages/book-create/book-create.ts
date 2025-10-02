import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../../../../core/services/book.service';
import { Router } from '@angular/router';

@Component({
   imports: [ReactiveFormsModule],
  selector: 'app-book-create',
  templateUrl: './book-create.html'
})
export class BookCreateComponent {
  bookForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private bookService: BookService, private router: Router) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      coverUrl: ['']
    });
  }

  submit() {
    if (this.bookForm.invalid) return;

    this.bookService.createBook(this.bookForm.value).subscribe({
      next: () => this.router.navigate(['/books']),
      error: err => this.errorMessage = err.error.message || 'Book creation failed'
    });
  }
}
