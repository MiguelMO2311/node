import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { BooksService } from './services/books.service';
import { LoginComponent } from './pages/login/login.component';
import { HttpClient } from '@angular/common/http';

export const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Register', component: RegisterComponent },
    { path: 'Profile', component: ProfileComponent },
    { path: 'Books', component: BooksComponent },
    { path: 'AddBook', component: AddBookComponent },
    { path: 'UpdateBook', component: UpdateBookComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'BookService', component: BooksService},
    { path: 'HttpClient', component:HttpClient}
];
