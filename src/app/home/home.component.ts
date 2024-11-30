import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface Student {
  email: string;
  password: string;
  
  isChecked: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  student: Student = {
    email: '',
    password: '',
    
    isChecked: true
  };

  submit() {
    alert("submitted");
    console.log(this.student);
  }

  signIn = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
    reg: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  reactivesubmit() {
    console.log(this.signIn.value);
  }
}