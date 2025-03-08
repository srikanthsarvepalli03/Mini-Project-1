import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private storageKey = 'contacts';

  constructor() {}

  getContacts(): any[] {
    const contacts = localStorage.getItem(this.storageKey);
    return contacts ? JSON.parse(contacts) : [];
  }

  addContact(contact: any): void {
    const contacts = this.getContacts();
    contacts.push(contact);
    localStorage.setItem(this.storageKey, JSON.stringify(contacts));
  }

  updateContact(updatedContact: any): void {
    let contacts = this.getContacts();
    const index = contacts.findIndex((c) => c.id === updatedContact.id);
    if (index !== -1) {
      contacts[index] = updatedContact;
      localStorage.setItem(this.storageKey, JSON.stringify(contacts));
    }
  }

  deleteContact(id: number): void {
    let contacts = this.getContacts();
    contacts = contacts.filter((c) => c.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(contacts));
  }
}
