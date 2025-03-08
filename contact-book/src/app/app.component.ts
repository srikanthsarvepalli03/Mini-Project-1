import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ContactComponent],
  template: `<app-contact></app-contact>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
