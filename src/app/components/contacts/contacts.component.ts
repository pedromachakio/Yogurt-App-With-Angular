import { Component, OnInit } from '@angular/core';
import { SendFormService } from 'src/app/services/send-form.service';

@Component({
  selector: 'ygr-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  userPost = {
    subject: '',
    message: '',
    email: '',
  };

  isSendingForm = false;
  isFormSent = false;

  constructor(private sendUserPost: SendFormService) {}

  ngOnInit(): void {}

  onFormSubmit() {
    this.isSendingForm = true;
    this.sendUserPost.postUserForm(this.userPost).subscribe((response: any) => {
      console.log('Enviado:', response);
      if (response.status === 'SUCCESS') {
        this.isFormSent = true;
        this.isSendingForm = false;
        setTimeout(() => {
          this.isFormSent = false;
        }, 2000);
      }
    });
  }
}
