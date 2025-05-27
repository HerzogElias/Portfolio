import { HttpClient } from '@angular/common/http';
import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contactform',
  imports: [CommonModule,FormsModule,TranslateModule,RouterModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {
  thankYouVisible = false; 
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
  if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.privacyAccepted) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          ngForm.resetForm();
          this.thankYouVisible = true;

          setTimeout(() => {
            this.thankYouVisible = false;
          }, 5000);
        },
        error: (error) => {
          console.error('Fehler beim Senden:', error);
        },
        complete: () => console.info('send post complete')
      });
  } else if (ngForm.submitted && ngForm.form.valid && this.mailTest && this.privacyAccepted) {
    ngForm.resetForm();
    this.thankYouVisible = true;

    setTimeout(() => {
      this.thankYouVisible = false;
    }, 4000);
  }
}

}
