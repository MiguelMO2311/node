import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsComponent } from './cards.component';
import { BooksComponent } from '../../pages/books/books.component';
import { RefBooksPipe } from '../../pipes/ref-books.pipe';
import { CommonModule } from '@angular/common';
import { EuroSymbolPipe } from '../../pipes/euro-symbol.pipe';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: []
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
