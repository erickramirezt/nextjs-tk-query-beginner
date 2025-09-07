import { contacts } from '../_constants/contacts'

export function getContact({ contactId }: { contactId: number }) {
  return {
    contact: contacts.find((contact) => contact.id === contactId),
  }
}
