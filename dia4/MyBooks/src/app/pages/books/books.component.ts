import { Component, Input } from '@angular/core';
import { Books } from '../../models/books';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../../component/cards/cards.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { UpdateBookComponent } from '../update-book/update-book.component';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';
import { findIndex } from 'rxjs';
import { RefBooksPipe } from '../../pipes/ref-books.pipe';
import { EuroSymbolPipe } from '../../pipes/euro-symbol.pipe';


@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, CardsComponent, AddBookComponent, UpdateBookComponent, RefBooksPipe, EuroSymbolPipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {

  public books: Books[] = [];
  public singleBook!: Books;

  constructor(private readonly bookService: BooksService, private readonly activatedRoute: ActivatedRoute) {


  }

  ngOnInit(): void {
    
      this.books= this.bookService.getAll()
   
     
  }
  public newBook!: Books;
  public getNewBook(newBook: Books) {
    this.newBook = newBook
    this.books.push(newBook);
    return this.books;
  }

  deleteBook(id: number) {
    let index = this.books.findIndex(book => book.id_book === id);
    this.books.splice(index, 1);

  }

  public findBook(id_book: HTMLInputElement) {
    if(id_book.value === ''){
      this.books= this.bookService.getAll();

    } else{
      this.books = [this.bookService.getOne(Number(id_book.value))]
    }
    
  }

}

