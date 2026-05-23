import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MetaService } from '../../core/meta';

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services implements OnInit {
  constructor(private metaService: MetaService) {}

  services = [
    {
      image: 'assets/service-hardware.jpg',
      title: 'Computer & Laptop Service',
      text: 'Desktop, laptop, software installation, formatting, upgrades, networking and maintenance.',
    },
    {
      image: 'assets/service-printer.jpg',
      title: 'Printer Sales & Repair',
      text: 'Printer setup, troubleshooting, cartridge guidance and support for office printing needs.',
    },
    {
      image: 'assets/service-cctv.jpg',
      title: 'CCTV Installation',
      text: 'Camera setup for home, shop and office with DVR/NVR configuration and mobile viewing.',
    },
    {
      image: 'assets/service-tally.webp',
      title: 'Tally Support',
      text: 'Tally installation, renewal, company setup, GST configuration, backup and user guidance.',
    },
    {
      image: 'assets/service-biz.png',
      imageClass: 'service-image-contain',
      title: 'BizAnalyst Integration',
      text: 'Mobile business reports, outstanding tracking and Tally data access for business owners.',
    },
    {
      image: 'assets/service-antivirus.jpg',
      title: 'Antivirus & Security',
      text: 'Licensed antivirus products, setup, renewal and protection advice for systems and offices.',
    },
  ];

  process = ['Understand requirement', 'Inspect or suggest solution', 'Install or repair', 'Support after delivery'];

  ngOnInit() {
    this.metaService.updateSeo({
      title: 'Computer, CCTV, Printer & Tally Services in Ahmedabad | Shubham Computers',
      description:
        'Get computer and laptop service, CCTV installation, printer repair, Tally support, BizAnalyst integration and antivirus setup in Ahmedabad.',
      path: '/services',
      keywords:
        'computer service Ahmedabad, laptop repair Ahmedabad, CCTV installation Ahmedabad, printer repair Ahmedabad, Tally support Ahmedabad, BizAnalyst Ahmedabad',
    });
  }
}
