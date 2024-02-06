import { Injectable } from '@angular/core';
import { Books } from '../models/books';
import { CommonModule } from '@angular/common';
import { BooksComponent } from '../pages/books/books.component';

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  constructor() { }
  
  
  private books: Books[] = [
    {
      id_book: 1,
      id_user: 1111,
      title: 'Relato de un naúfrago',
      type: 'soft',
      author: 'Gabriel Gª Már.quez',
      price: 11.35,
      photo: 'https://imagessl2.casadellibro.com/a/l/s7/62/9788490323762.webp',
    },
  
    {
      id_book: 2,
      id_user: 1111,
      title: 'La Perla',
      type: 'hard',
      author: 'John Steinbeck',
      price: 16.62,
      photo: 'https://imagessl8.casadellibro.com/a/l/s7/78/9788468231778.webp',
    },
  
    {
      id_book: 3,
      id_user: 1111,
      title: 'Viven',
      type: 'soft',
      author: 'Piers Paul Read ',
      price: 13.30,
      photo: 'https://imagessl9.casadellibro.com/a/l/s7/69/9788490702369.webp',
    },
  
    {
      id_book: 4,
      id_user: 1111,
      title: 'Alas de Hierro',
      type: 'hard',
      author: 'Rebecca Yarros',
      price: 22.70,
      photo: 'https://imagessl0.casadellibro.com/a/l/s7/50/9788408284550.webp',
    },
  
    {
      id_book: 5,
      id_user: 1111,
      title: 'El problema final',
      type: 'hard',
      author: 'Arturo Pérez Reverte',
      price: 20.80,
      photo: 'https://imagessl0.casadellibro.com/a/l/s7/60/9788420476360.webp',
    },
  
    {
      id_book: 6,
      id_user: 1111,
      title: 'La Armadura de la Luz (...)',
      type: 'hard',
      author: 'Ken Follett',
      price: 23.65,
      photo: 'https://imagessl0.casadellibro.com/a/l/s7/30/9788401030130.webp',
    },
  ]

  
  public getAll():Books[]{
   return this.books;
  }

  public getOne(id_book:number):Books {
    const testBook = {
      id_book: 0,
      id_user: 0,
      title: 'Este libro  "NO EXISTE"',
      type: '......',
      author: '.....',
      price: 0,
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgOTZOgmpg4qZNjV2BZSnrBNzOHChZs0wmw&usqp=CAU',
    }
    return this.books.find ((books) => books.id_book === id_book) || testBook;
  }

  public add (newBook:Books): void {
    this.books.push(newBook);
  }

  public edit (book: Books){
   const index = this.books.findIndex((booking) => booking.id_book === book.id_book);
    if (index != -1){
      this.books[index] = book
    }
    }
  
  public delete(id_book:number){
    let index = this.books.findIndex(book =>book.id_book === id_book);
    if (index != -1){
      this.books.splice(index,1);
    }
}
}
