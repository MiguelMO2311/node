import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterComponent } from '../../pages/register/register.component';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RegisterComponent],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {
  public reactiveForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required ),
    surnames: new FormControl('', Validators.required ),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    passwordRepeat: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  });
  
  public loginSubmit(): void {
    console.log(this.reactiveForm.value)
    console.log(this.reactiveForm)
  }
  

}
