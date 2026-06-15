import { Component,} from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

   form = {
    name: '',
    email: '',
    mobile: '',
    message: ''
  };

  status = '';
isSending = false;
showToast = false;
toastType: 'success' | 'error' = 'success';

constructor() {
  // ✅ Put your PUBLIC KEY here (from EmailJS dashboard)
  emailjs.init('eJDTWMZY7jhfNCD8P');
}

sendMessage(formRef: NgForm) {
    if (formRef.invalid) {
    this.showToastMessage('Please fix the errors in the form.', 'error');
    return;
  }

  this.isSending = true;

  emailjs.send(
    'service_42d06mx',
    'template_mjo3sez',
    {
      name: this.form.name,
      email: this.form.email,
      mobile: this.form.mobile,
      message: this.form.message
    }
  ).then(() => {
    this.form = { name: '', email: '', mobile: '', message: '' };
    this.showToastMessage('Message sent successfully! I will get back to you soon.', 'success');
    this.isSending = false;
    formRef.resetForm();
  }).catch(() => {
    this.showToastMessage('Failed to send message. Please try again.', 'error');
    this.isSending = false;
  });
  
}

showToastMessage(message: string, type: 'success' | 'error') {
  this.status = message;
  this.toastType = type;
  this.showToast = true;

  setTimeout(() => {
    this.showToast = false;
  }, 4000); // disappears after 4 seconds
}
}