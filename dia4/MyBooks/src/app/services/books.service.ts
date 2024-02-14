import { Injectable } from '@angular/core';
import { Books } from '../models/books';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }


  private books: Books[] = []


  // public getAll(): Books[] {
  //   return this.books;
  // }

  // public getOne(id_book: number): Books {
  //   const testBook = {
  //     id_book: 0,
  //     id_user: 0,
  //     title: 'Este libro  "NO EXISTE"',
  //     type: '......',
  //     author: '.....',
  //     price: 0,
  //     photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgOTZOgmpg4qZNjV2BZSnrBNzOHChZs0wmw&usqp=CAU',
  //   }
  //   return this.books.find((books) => books.id_book === id_book) || testBook;
  // }

  // public add(newBook: Books): void {
  //   this.books.push(newBook);
  // }

  // public edit(book: Books) {
  //   const index = this.books.findIndex((booking) => booking.id_book === book.id_book);
  //   if (index != -1) {
  //     this.books[index] = book
  //   }
  // }

  // public delete(id_book: number) {
  //   let index = this.books.findIndex(book => book.id_book === id_book);
  //   if (index != -1) {
  //     this.books.splice(index, 1);
  //   }
  // }
  //  metodo en pages/book ***
  public getAllApi() {
    return this.http.get(`${this.url}/books`)
  }
  public getOneApi(id_book: number) {
    return this.http.get(`${this.url}/booksByQuery?id_book=${id_book}`)
  }

  public deleteApi(id_book: Books) {
    return this.http.delete(`${this.url}/booksByQuery?id_book=${id_book}`)
  }

  // metodo en pages/addBook ***

  public addApi(book: Books) {
    return this.http.post(`${this.url}/books`, book)
  }

  public edit(book: Books) {
    const index = this.books.findIndex(booking => booking.id_book === book.id_book);
    if (index != -1) {
      this.books[index] = book;
    }
  }
  // metodo en pages/updateBook ***
  public updateApi(book: Books) {
    return this.http.put(`${this.url}/booksByQuery?id_book=${book.id_book}`, book)
  }

}
