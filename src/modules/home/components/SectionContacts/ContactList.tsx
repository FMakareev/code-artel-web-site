import * as React from 'react';
import { IContact } from './types';
import ContactItem from './ContactItem';

interface IContactListProps {
  contacts: IContact[];
}

export const ContactList: React.FC<IContactListProps> = ({ contacts }: IContactListProps) => (
  <React.Fragment>
    {contacts &&
      contacts.map((contact: IContact, index: number) => <ContactItem key={index} {...contact} />)}
  </React.Fragment>
);

export default ContactList;
