import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksComponent } from './books.component';
import { CardsComponent } from '../../component/cards/cards.component';
import { RefBooksPipe } from '../../pipes/ref-books.pipe';
import { AddBookComponent } from '../add-book/add-book.component';
import { EuroSymbolPipe } from '../../pipes/euro-symbol.pipe';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBookComponent, CardsComponent, RefBooksPipe, EuroSymbolPipe]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
