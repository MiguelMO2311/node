
import { Component } from '@angular/core';
import { Books } from '../../models/books';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [], 
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {




  constructor( private readonly bookService: BooksService, private route:ActivatedRoute, private router:Router) {

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



this.bookService.edit(myBook);

this.bookService.updateApi(myBook).subscribe((data)=> {
  this.router.navigateByUrl('/books')
})

}
}
