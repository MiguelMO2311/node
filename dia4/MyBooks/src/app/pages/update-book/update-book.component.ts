import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BooksComponent } from '../books/books.component';
import { Books } from '../../models/books';
import { BooksService } from '../../services/books.service';
import { CardsComponent } from '../../component/cards/cards.component';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [CommonModule, CardsComponent, BooksComponent], 
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {




  constructor( private readonly bookService: BooksService) {

  }
    
  ngOnInit(): void {
   
    
  }
  

public editBook( id_book: HTMLInputElement, photo: HTMLInputElement, title: HTMLInputElement, type: HTMLInputElement, author: HTMLInputElement,
  price: HTMLInputElement,  id_user: HTMLInputElement) {
 
    const myBook: Books = {
    id_book: Number(id_book.value),
    photo: photo.value,
    title: title.value,
    type: type.value,
    author: author.value,
    price: Number(price.value),
    id_user: Number(id_user.value)
  }


console.log(myBook.photo);
this.bookService.edit(myBook);


}

}
