import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Service } from './service-info.model';


@Component({
  selector: 'app-service-info',
  imports: [MatIconModule, CommonModule],
  templateUrl: './service-info.component.html',
  styleUrl: './service-info.component.scss'
})
export class ServiceInfoComponent {
  @Input() services: Service[] = [];
  @Input() title: string = '';
  @Input() hasPrice: boolean = false;
}
