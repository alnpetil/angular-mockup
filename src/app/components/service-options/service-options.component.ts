import { Component } from '@angular/core';
import { ServiceInfoComponent } from './service-info/service-info.component';
import { Service } from './service-info/service-info.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-service-options',
  imports: [ServiceInfoComponent],
  templateUrl: './service-options.component.html',
  styleUrl: './service-options.component.scss'
})
export class ServiceOptionsComponent {
  @Input() optionCoffin: boolean = true;

  public cremationServices: Service[] = [
    {
      icon: 'check',
      description: 'Everything in Bare Cremation.',
      color: '#035E61',
      iconBackground: '#FFD878'
    }
  ]
  
  public funeralServices: Service[] = [
    {
      icon: 'check',
      description: 'Bare Partner Venue',
      color: '#035E61',
      iconBackground: '#FFD878'
    },
    {
      icon: 'check',
      description: 'Professional Funeral Celebrant',
      color: '#035E61',
      iconBackground: '#FFD878'
    },
    {
      icon: 'check',
      description: 'Curated Slideshow and AV Equipment',
      color: '#035E61',
      iconBackground: '#FFD878'
    },
    {
      icon: 'check',
      description: 'Selection of Flowers',
      color: '#035E61',
      iconBackground: '#FFD878'
    },
    {
      icon: 'check',
      description: 'Stationery & Service Booklets',
      color: '#035E61',
      iconBackground: '#FFD878'
    },
    {
      icon: 'check',
      description: 'Dedicated Event Manager',
      color: '#035E61',
      iconBackground: '#FFD878'
    },
    {
      icon: 'check',
      description: 'Bare Funeral Coffin',
      color: '#035E61',
      iconBackground: '#FFD878'
    }
  ]
  
  public funeralServiceWithPrice: Service[] = [
    {
      icon: 'attach_money',
      description: 'Viewing',
      color: '#035E61',
      iconBackground: '#B0E0D6',
      price: '$400'
    },
    {
      icon: 'attach_money',
      description: 'Premium Coffin',
      color: '#035E61',
      iconBackground: '#B0E0D6',
      price: '$100 - $4000'
    },
    {
      icon: 'attach_money',
      description: 'Live Streaming',
      color: '#035E61',
      iconBackground: '#B0E0D6',
      price: 'P.O.A'
    },
    {
      icon: 'attach_money',
      description: 'Catering',
      color: '#035E61',
      iconBackground: '#B0E0D6',
      price: 'P.O.A'
    },
  ]
}
