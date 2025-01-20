import { Component, OnInit, OnChanges } from '@angular/core';
import { ServiceInfoComponent } from './service-info/service-info.component';
import { Service } from './service-info/service-info.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-service-options',
  imports: [ServiceInfoComponent],
  templateUrl: './service-options.component.html',
  styleUrl: './service-options.component.scss'
})
export class ServiceOptionsComponent implements OnInit, OnChanges {
  @Input() optionCoffin: boolean = true;
  
  ngOnInit() {
    console.log(this.optionCoffin);
    this.setPriceValue();
  }

  ngOnChanges() {
    console.log(this.optionCoffin);
    this.setPriceValue();
  }
  
  setPriceValue() {
    this.funeralServiceWithPrice = [
      {
        icon: 'attach_money',
        description: 'Viewing',
        color: this.optionCoffin ? '#035E61' : '#6B7280',
        iconBackground: this.optionCoffin ? '#B0E0D6' : '#D1D5DB',
        price: {
          amount: '$400',
          style: this.optionCoffin ? null : 'text-decoration: line-through;'
        }
      },
      {
        icon: 'attach_money',
        description: 'Premium Coffin',
        color: this.optionCoffin ? '#035E61' : '#6B7280',
        iconBackground: this.optionCoffin ? '#B0E0D6' : '#D1D5DB',
        price: {
          amount: '$100 - $4000',
          style: this.optionCoffin ? null : 'text-decoration: line-through;'
        }
      },
      {
        icon: 'attach_money',
        description: 'Live Streaming',
        color: '#035E61',
        iconBackground: '#B0E0D6',
        price: {
          amount: 'P.O.A'
        }
      },
      {
        icon: 'attach_money',
        description: 'Catering',
        color: '#035E61',
        iconBackground: '#B0E0D6',
        price: {
          amount: 'P.O.A'
        }
      }
    ];

  }


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
  ]
}
