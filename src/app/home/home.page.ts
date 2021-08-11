import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  onChange(target: HTMLIonInputElement): void {
    target.value = `${target.value}`.replace(/[^\d]+/g, '').slice(0, 10);
  }
}
