import { Component, EventEmitter, Output } from '@angular/core';
import { BooksComponent } from '../books/books.component';
import { CommonModule } from '@angular/common';
import { Books } from '../../models/books';
import { CardsComponent } from '../../component/cards/cards.component';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [ CommonModule, CardsComponent, BooksComponent],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  constructor(private readonly bookService: BooksService) {
 
    
  
  
    }

  
  // @Output() eventInsertBook = new EventEmitter<Books>();

  public insertNewBook(title: HTMLInputElement, type: HTMLInputElement, author: HTMLInputElement,
    price: HTMLInputElement, photo: HTMLInputElement, id_book: HTMLInputElement, id_user: HTMLInputElement) {
    const newBook: Books = {
      photo: photo.value,
      title: title.value,
      id_book: Number(id_book.value),
      id_user: Number(id_user.value),
      type: type.value,
      author: author.value,
      price: Number(price.value),
    }
  

  // this.eventInsertBook.emit(newBook)
  console.log(newBook);
  this.bookService.add(newBook);
  
}


    }
