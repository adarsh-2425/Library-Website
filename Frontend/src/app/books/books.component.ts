import { Component, OnInit } from '@angular/core';
import { BookModel } from './book.model';
import { BookService } from '../book.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  pageTitle: string = 'Books';
  books: BookModel[] = [];

  imageWidth: number = 50;
  imageMargin: number = 2;

  constructor(private router:Router,private bookService: BookService) { }
  

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }
  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['/update-book']);

  }
  deleteBook(book:any)
  {
    alert('Delete action cannot be undone!! CONTINUE??')
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(b => b !== book);
      })
  

  }
}
