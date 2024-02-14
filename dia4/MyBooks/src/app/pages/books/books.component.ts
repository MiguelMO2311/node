import { Component } from '@angular/core';
import { Books } from '../../models/books';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../../component/cards/cards.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { UpdateBookComponent } from '../update-book/update-book.component';
import { BooksService } from '../../services/books.service';
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
  // public singleBook!: Books;

  constructor(public readonly bookService: BooksService) {

    this.bookService.getAllApi().subscribe((data: any) => {
      console.log('HOLA DATA', data)
      this.books = data;

    })
  }

  ngOnInit(): void {

    // this.books= this.bookService.getAll()
    this.books = [];


  }
  public newBook!: Books;
  public getNewBook(newBook: Books) {
    this.newBook = newBook
    this.books.push(newBook);
    return this.books;
  }


  // public findBook(id_book: HTMLInputElement) {
  //   if(id_book.value === ''){
  //     this.books= this.bookService.getAll();

  //   } else{
  //     this.books = [this.bookService.getOne(Number(id_book.value))]
  //   }

  // }


  public findBook(id_book: HTMLInputElement) {
    if (id_book.value === "") {
      this.bookService.getAllApi().subscribe((data: any) => {

        this.books = data;
      })
    } else {
      this.bookService.getOneApi(Number(id_book.value)).subscribe((data: any) => {

        this.books = [data];
      })
    }
  }
  deleteBook(book: any) {
    // let index = this.books.findIndex(book => book.id_book === id);
    // this.books.splice(index, 1);

    this.bookService.deleteApi(book).subscribe((data: any) => {
      console.log(data)
      this.books = data.books;
    })


  }

}

