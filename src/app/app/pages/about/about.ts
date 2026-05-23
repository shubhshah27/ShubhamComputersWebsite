import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MetaService } from '../../core/meta';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  constructor(private metaService: MetaService) {}

  strengths = [
    {
      title: 'Practical IT Guidance',
      text: 'We suggest hardware, software and security options based on your actual usage and budget.',
      icon: 'bi-lightbulb',
    },
    {
      title: 'Fast Local Support',
      text: 'Ahmedabad-based service for computer, laptop, printer, CCTV, Tally and business IT issues.',
      icon: 'bi-lightning-charge',
    },
    {
      title: 'Reliable After-Sales Care',
      text: 'From installation to maintenance, we stay available when your system needs attention.',
      icon: 'bi-shield-check',
    },
  ];

  values = ['Clear communication', 'Genuine products', 'Affordable service', 'Long-term relationships'];

  milestones = [
    { count: '20+', label: 'Years Experience' },
    { count: '1000+', label: 'Customers Served' },
    { count: '6', label: 'Days Support' },
  ];

  ngOnInit() {
    this.metaService.updateSeo({
      title: 'About Shubham Computers | Local IT Support in Ahmedabad',
      description:
        'Learn about Shubham Computers, a local Ahmedabad technology partner for computer sales, repairs, CCTV, printer, Tally, BizAnalyst and antivirus support.',
      path: '/about',
      keywords:
        'about Shubham Computers, IT support Ahmedabad, computer service Sabarmati, local computer shop Ahmedabad',
    });
  }
}
