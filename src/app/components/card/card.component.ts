import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ServiceOptionsComponent } from '../service-options/service-options.component';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-card',
  imports: [MatToolbarModule, MatTabsModule, MatIconModule, ServiceOptionsComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  private _withCoffin = new BehaviorSubject<boolean>(true);
  withCoffin$ = this._withCoffin.asObservable();

  amount = 1000;
  
  setWithCoffin(value: boolean) {
    this._withCoffin.next(value);
  }
  
  getWithCoffin() {
    return this._withCoffin.getValue();
  } 
}
