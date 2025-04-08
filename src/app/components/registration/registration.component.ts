import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  registrationForm: FormGroup =  new FormGroup({
    organizationName: new FormControl('', [Validators.required]),
    emailId: new FormControl('', [Validators.email, Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    address: new FormControl('', [Validators.required]),
  });

  isFormSubmitted: boolean = false;

  constructor(private http: HttpClient) {}

  submitForm() {
    if (this.registrationForm.valid) {
      this.http.post('http://127.0.0.1:8000/api/register', this.registrationForm.value)
        .subscribe({
          next: (response) => {
            this.isFormSubmitted = true;
            console.log('Form submitted successfully:', response);
            alert('Registration successful!');
            this.registrationForm.reset();
          },
          error: (error) => {
            console.error('Error submitting form:', error);
            alert('Failed to submit the form. Please try again.');
          }
        });
    }
  }
}
