import { Component } from '@angular/core';
import { User } from '../../models/user';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
public user: User ={
  Id_user:1,
  name: 'Miguel',
  last_name: 'Meneses Oliveros',
  email: 'm.....@hotmail.com',
  url: 'https://example.com/users/',
  photo:'/assets/foto_user1.jpg',
  password:'12345'
}

public changeName(input:HTMLInputElement){
this.user.name = input.value;
console.log(input.value)
}
public changeDataCard(inputPhoto: HTMLInputElement, inputName:HTMLInputElement, inputLast_Name:HTMLInputElement,inputEmail:HTMLInputElement ){
  this.user.photo = inputPhoto.value;
  this.user.name = inputName.value;
  this.user.last_name = inputLast_Name.value;
  this.user.email = inputEmail.value;
}
}