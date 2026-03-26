import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm: FormGroup;
  showSuccess = false;
  showError = false;
  isLoading = false;
  constructor(private fb: FormBuilder, private firestore: Firestore) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      const contactData = {
        name: this.contactForm.value.name,
        phone: this.contactForm.value.phone,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message,
        timestamp: new Date().toISOString()
      };
      try {
        const contactsCollection = collection(this.firestore, 'contacts');
        const contactRef = doc(contactsCollection, new Date().getTime().toString());
        await setDoc(contactRef, contactData);
        this.isLoading = false;
        this.showSuccess = true;
        this.contactForm.reset();
        // Hide success message after 3 seconds
        setTimeout(() => {
          this.showSuccess = false;
        }, 3000);
      } catch (error) {
        this.isLoading = false;
        console.error('Error submitting contact form:', error);
        this.showError = true;
        // Hide error message after 3 seconds
        setTimeout(() => {
          this.showError = false;
        }, 3000);
      }
    }
  }
}
