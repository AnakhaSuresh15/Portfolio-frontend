import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { GlobalService } from '../../services/global-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(private globalService: GlobalService) {}
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  email = '';
  message = '';
  disableSubmit = true;

  submitForm() {
    this.globalService
      .sendMessage({ email: this.email, message: this.message })
      .subscribe({
        next: (res) => alert('Message sent successfully!'),
        error: (err) => alert('Failed to send message.'),
      });
  }

  inputChange() {
    this.disableSubmit = this.email.length === 0 || this.message.length === 0;
  }
}
