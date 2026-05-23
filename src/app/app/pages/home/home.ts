import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MetaService } from '../../core/meta';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  private readonly formSubmitUrl = 'https://formsubmit.co/ajax/shubham_computers2005@yahoo.com';

  formSubmitted = false;
  isSubmitting = false;
  errorMessage = '';

  constructor(
    private metaService: MetaService,
    private http: HttpClient
  ) {}

  slides = [
    {
      image: 'assets/slide-hardware.webp',
      title: 'Complete IT Hardware Solutions',
      text: 'Computers, laptops, printers and CCTV with dependable sales, service and on-site support.',
      buttonText: 'Explore Services',
      link: '/services'
    },
    {
      image: 'assets/slide-tally.jpg',
      title: 'Tally ERP 9 & Prime Experts',
      text: 'Tally sales, installation, training and customization for growing businesses.',
      buttonText: 'Know More',
      link: '/services'
    },
    {
      image: 'assets/silde-biz.avif',
      title: 'BizAnalyst Support & Integration',
      text: 'Boost your business with mobile analytics and reports synced with Tally.',
      buttonText: 'Discover More',
      link: '/services'
    },
    {
      image: 'assets/slide-antivirus.png',
      title: 'Secure Your System with Trusted Antivirus',
      text: 'Sales and support for Quick Heal, Kaspersky and total security products.',
      buttonText: 'Protect Now',
      link: '/services'
    }
  ];

  highlights = [
    { count: '20+', label: 'Years of Experience' },
    { count: '1000+', label: 'Happy Clients' },
    { count: '6', label: 'Days a Week Support' }
  ];

  services = [
    {
      image: 'assets/service-hardware.jpg',
      title: 'Computer & Laptop Sales & Service',
      text: 'New systems, upgrades, installation, troubleshooting and maintenance support.'
    },
    {
      image: 'assets/service-cctv.jpg',
      title: 'CCTV Installation & Support',
      text: 'Security camera setup for homes, shops and offices with remote monitoring.'
    },
    {
      image: 'assets/service-printer.jpg',
      title: 'Printer Sales & Maintenance',
      text: 'Laser, inkjet and dot-matrix printer sales, cartridge refilling and repair service.'
    },
    {
      image: 'assets/service-tally.webp',
      title: 'Tally ERP Sales & Support',
      text: 'Installation, training, renewal, backup guidance and GST-ready setup.'
    },
    {
      image: 'assets/service-biz.png',
      title: 'BizAnalyst Integration',
      text: 'Mobile access to Tally reports, outstanding tracking and business analysis.'
    },
    {
      image: 'assets/service-antivirus.jpg',
      title: 'Antivirus & Data Security',
      text: 'Licensed antivirus solutions with expert setup and renewal support.'
    }
  ];

  testimonials = [
    {
      text: 'Excellent and fast service. Our CCTV and computer setup were completed smoothly.',
      author: 'Business Owner, Ahmedabad'
    },
    {
      text: 'Their Tally and BizAnalyst support helped us manage accounting reports much better.',
      author: 'Accountant, Gandhinagar'
    }
  ];

  contactInfo = {
    phone: '9824817431',
    email: 'shubham_computers2005@yahoo.com',
    address: '34, Shilpa Society, D-Cabin, Sabarmati, Ahmedabad',
    tagline: 'Fast support | Affordable pricing | 20+ years experience | Genuine products'
  };

  serviceOptions = [
    'Computer repair',
    'Laptop upgrade',
    'CCTV setup',
    'Tally support',
    'Printer service',
    'Antivirus'
  ];

  onSubmit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const { company, message, ...payload } = form.value;

    this.isSubmitting = true;
    this.errorMessage = '';
    this.formSubmitted = false;

    this.http
      .post(
        this.formSubmitUrl,
        {
          ...payload,
          message: company ? `Company / Organization: ${company}\n\n${message}` : message,
          _subject: `Website enquiry: ${payload.service}`,
          _template: 'table',
          _captcha: 'false'
        },
        {
          headers: new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json'
          })
        }
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
          this.errorMessage = 'Unable to send your message right now. Please call us directly.';
        }
      });
  }

  ngOnInit() {
    this.metaService.updateSeo({
      title: 'Shubham Computers | Computer Sales, Service, CCTV & Tally Support Ahmedabad',
      description:
        'Shubham Computers provides computer sales, laptop repair, printer service, CCTV installation, Tally, BizAnalyst and antivirus support in Ahmedabad.',
      path: '/',
      keywords:
        'computer repair Ahmedabad, laptop service Ahmedabad, CCTV installation Ahmedabad, Tally support Ahmedabad, printer service Ahmedabad, antivirus Ahmedabad',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ComputerStore',
        name: 'Shubham Computers',
        url: this.metaService.getSiteUrl(),
        image: `${this.metaService.getSiteUrl()}/assets/shubhamComputerLogo.png`,
        telephone: '+919824817431',
        email: 'shubham_computers2005@yahoo.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '34, Shilpa Society, D-Cabin, Sabarmati',
          addressLocality: 'Ahmedabad',
          addressRegion: 'Gujarat',
          addressCountry: 'IN'
        },
        areaServed: ['Ahmedabad', 'Sabarmati', 'D-Cabin', 'Gandhinagar'],
        priceRange: '$$',
        description:
          'Computer sales, service, CCTV installation, printer repair, Tally, BizAnalyst and antivirus support in Ahmedabad.',
        makesOffer: this.services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.text
          }
        }))
      }
    });
  }
}
