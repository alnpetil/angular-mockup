import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { ServiceOptionsComponent } from '../service-options/service-options.component';

@Component({
  selector: 'app-card',
  imports: [MatToolbarModule, MatTabsModule, ServiceOptionsComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  amount = 1000;
}
