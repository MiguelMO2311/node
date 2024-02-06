import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EuroSymbolPipe } from '../../pipes/euro-symbol.pipe';
import { RefBooksPipe } from '../../pipes/ref-books.pipe';
import { CommonModule } from '@angular/common';
import { BooksComponent } from '../../pages/books/books.component';
import { Books } from '../../models/books';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, EuroSymbolPipe, RefBooksPipe,BooksComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {



  constructor(private readonly bookService: BooksService) {
  
 

  
    }
    
    ngOnInit(): void {
     
        }



@Input() public book: Books = new Books()



@Output() eventDelete = new EventEmitter<number>();

public deleteCard(id_book:number) {

  
  this.eventDelete.emit(id_book);

}
}

