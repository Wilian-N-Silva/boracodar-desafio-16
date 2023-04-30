export interface Contact {
  first_name: string
  last_name: string
  phone: string
}
export interface ContactLetterGroupProps {
  char: string
  contacts: Contact[]
}
