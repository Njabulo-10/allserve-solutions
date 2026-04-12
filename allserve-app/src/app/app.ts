import { Component } from '@angular/core';
import { inject } from "@vercel/analytics"
inject()

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  services = [
    {
      title: 'Custom Woodwork & Carpentry',
      description: 'Bespoke wooden furniture, built-ins, and carpentry solutions crafted to your exact specifications.',
    },
    {
      title: 'Roofing & Tiling',
      description: 'Professional roof installations and premium tile work for floors, walls, and wet areas.',
    },
    {
      title: 'TV Stands & Wall Units',
      description: 'Custom-designed TV feature walls and entertainment units that become the centrepiece of your room.',
    },
    {
      title: 'Wall & Floor Cladding',
      description: 'Stunning wall and floor cladding solutions using stone, timber, and luxury panelling materials.',
    },
    {
      title: 'Ceiling Designs & Bulkheads',
      description: 'Decorative ceilings, coffered bulkheads, and suspended ceiling systems with elegant finishes.',
    },
    {
      title: 'Painting & Decorative Finishes',
      description: 'Expert painting services including feature walls, textured finishes, and faux effects.',
    },
    {
      title: 'Kitchen, Bedroom & Bathroom Designs',
      description: 'Full interior design and fitout for kitchens, bedrooms, and bathrooms tailored to your lifestyle.',
    },
    {
      title: 'Elegant Lighting & Interior Décor',
      description: 'Ambient and accent lighting installations paired with curated décor to complete your space.',
    },
    {
      title: 'Zebra Blinds Installation',
      description: 'Premium zebra and roller blind installations for a sleek, modern window treatment.',
    },
  ];

  whyUs = [
    {
      label: 'Exceptional Workmanship',
      detail: 'Every finish is held to the highest standard — we don\'t cut corners.',
    },
    {
      label: 'Custom-Tailored Solutions',
      detail: 'No two projects are the same. We design and build around your vision.',
    },
    {
      label: 'On Time, Every Time',
      detail: 'We respect your schedule and deliver projects within agreed timelines.',
    },
    {
      label: 'Premium Materials',
      detail: 'Only quality-certified materials are used to ensure lasting results.',
    },
  ];

  stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '2', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '9', label: 'Core Services' },
  ];
}
