import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MetaService } from '../../core/meta';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  private readonly formSubmitUrl = 'https://formsubmit.co/ajax/shubham_computers2005@yahoo.com';

  isSubmitting = false;
  formSubmitted = false;
  formError = '';

  constructor(
    private http: HttpClient,
    private metaService: MetaService
  ) {}

  contactMethods = [
    { label: 'Phone', value: '9824817431', link: 'tel:+919824817431' },
    {
      label: 'Email',
      value: 'shubham_computers2005@yahoo.com',
      link: 'mailto:shubham_computers2005@yahoo.com',
    },
    { label: 'Address', value: '34, Shilpa Society, D-Cabin, Sabarmati, Ahmedabad', link: '' },
  ];

  quickTopics = ['Computer repair', 'Laptop upgrade', 'CCTV setup', 'Tally support', 'Printer service', 'Antivirus'];

  ngOnInit() {
    this.metaService.updateSeo({
      title: 'Contact Shubham Computers | Computer Service in Sabarmati, Ahmedabad',
      description:
        'Contact Shubham Computers for computer repair, laptop upgrade, CCTV setup, printer service, Tally support and antivirus help in Sabarmati, Ahmedabad.',
      path: '/contact',
      keywords:
        'contact Shubham Computers, computer repair Sabarmati, laptop service Sabarmati, CCTV setup Ahmedabad, Tally support Ahmedabad',
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.formSubmitted = false;
    this.formError = '';

    this.http
      .post<{ success?: string }>(
        this.formSubmitUrl,
        {
          ...form.value,
          _subject: `Website enquiry: ${form.value.service}`,
          _template: 'table',
          _captcha: 'false',
        },
        {
          headers: new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        },
      )
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.formSubmitted = true;
          form.resetForm();
          setTimeout(() => (this.formSubmitted = false), 4000);
        },
        error: () => {
          this.isSubmitting = false;
          this.formError = 'Sorry, your enquiry could not be sent right now. Please call us directly.';
        },
      });
  }
}
