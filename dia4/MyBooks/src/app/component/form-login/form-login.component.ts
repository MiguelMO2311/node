import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginComponent } from '../../pages/login/login.component';
import { User } from '../../../../MyBooks/src/app/models/user';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LoginComponent,],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})

export class FormLoginComponent {
// TEMPLATE FORMS  +++
  public user: User;

  constructor(){
    this.user= new User();
  }

  submit(form:NgForm) {
   console.log(form)
   console.log(this.user)
  }

// REACTIVE FORMS MODEL DRIVEN +++
public reactiveForm: FormGroup = new FormGroup({
  email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
});

public loginSubmit(): void {
  console.log(this.reactiveForm.value)
  console.log(this.reactiveForm)
}

}
