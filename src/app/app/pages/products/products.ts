import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MetaService } from '../../core/meta';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  constructor(private metaService: MetaService) {}

  products = [
    {
      title: 'Desktop Computers',
      text: 'Custom and branded desktops for office, accounting, study and daily work.',
      image: 'assets/slide-hardware.jpg',
    },
    {
      title: 'Laptops & Accessories',
      text: 'Laptop suggestions, accessories, upgrades, adapters, keyboards and basic peripherals.',
      image: 'assets/DesktopRepair.avif',
    },
    {
      title: 'Printers & Consumables',
      text: 'Printers, cartridges, maintenance guidance and printing setup for businesses.',
      image: 'assets/service-printer.jpg',
    },
    {
      title: 'CCTV Systems',
      text: 'Cameras, DVR/NVR setup, storage planning, mobile viewing and maintenance.',
      image: 'assets/service-cctv.jpg',
    },
    {
      title: 'Tally & BizAnalyst',
      text: 'Business accounting software, renewals, setup and mobile reporting integration.',
      image: 'assets/service-tally.webp',
    },
    {
      title: 'Antivirus Licenses',
      text: 'Licensed protection for personal systems, shops and office computers.',
      image: 'assets/service-antivirus.jpg',
    },
  ];

  buyingPoints = [
    { text: 'Requirement-based product selection', icon: 'bi-ui-checks-grid' },
    { text: 'Installation and basic setup support', icon: 'bi-tools' },
    { text: 'Warranty and renewal guidance', icon: 'bi-patch-check' },
    { text: 'Upgrade and maintenance assistance', icon: 'bi-arrow-repeat' },
  ];

  ngOnInit() {
    this.metaService.updateSeo({
      title: 'Computer Products, Printers, CCTV & Antivirus in Ahmedabad | Shubham Computers',
      description:
        'Shop desktop computers, laptops, printers, CCTV systems, Tally, BizAnalyst and antivirus licenses with setup support from Shubham Computers Ahmedabad.',
      path: '/products',
      keywords:
        'computer shop Ahmedabad, laptop accessories Ahmedabad, printer Ahmedabad, CCTV camera Ahmedabad, antivirus license Ahmedabad, Tally software Ahmedabad',
    });
  }
}
