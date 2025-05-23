import { HttpClient } from '@angular/common/http';
import { Component,inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  imports: [FormsModule,TranslateModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  http=inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: "",
  }
  
  mailTest = false;
  privacyAccepted = false;

  post = {
    endPoint: 'https://elias-herzog.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    console.log(this.contactData)
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest &&this.privacyAccepted) {
      console.log('kommt in den if teil rein')
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest &&this.privacyAccepted) {

      ngForm.resetForm();
    }
  }
}
