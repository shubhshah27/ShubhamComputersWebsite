import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MetaService } from '../../core/meta';

@Component({
  selector: 'app-clients',
  imports: [CommonModule, RouterModule],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class Clients implements OnInit {
  constructor(private metaService: MetaService) {}

  clientTypes = [
    { title: 'Small businesses', icon: 'bi-building' },
    { title: 'Retail shops', icon: 'bi-shop' },
    { title: 'Offices', icon: 'bi-briefcase' },
    { title: 'Accounting users', icon: 'bi-calculator' },
    { title: 'Home users', icon: 'bi-house-door' },
    { title: 'Service professionals', icon: 'bi-person-workspace' },
  ];

  testimonials = [
    {
      text: 'Quick service and clear guidance for our computer and printer setup.',
      author: 'Business Customer, Ahmedabad',
      service: 'Computer & Printer Setup',
    },
    {
      text: 'Helpful support for Tally, backup and day-to-day accounting system issues.',
      author: 'Accounting User',
      service: 'Tally & Backup Support',
    },
    {
      text: 'CCTV installation was completed neatly with mobile viewing configured properly.',
      author: 'Shop Owner',
      service: 'CCTV Installation',
    },
  ];

  clientLogos = [
    { name: 'Retail Store', initials: 'RS' },
    { name: 'Accounting Office', initials: 'AO' },
    { name: 'Local Business', initials: 'LB' },
    { name: 'Home Customer', initials: 'HC' },
    { name: 'Service Firm', initials: 'SF' },
    { name: 'Trading Company', initials: 'TC' },
  ];

  ngOnInit() {
    this.metaService.updateSeo({
      title: 'Clients & Customer Feedback | Shubham Computers Ahmedabad',
      description:
        'See customer feedback and the types of homes, shops, offices and accounting users supported by Shubham Computers in Ahmedabad.',
      path: '/clients',
      keywords:
        'Shubham Computers clients, computer service reviews Ahmedabad, CCTV customer feedback Ahmedabad, Tally support customers Ahmedabad',
    });
  }
}
