import { ContactLetterGroup } from "./ContactLetterGroup"
import { useEffect, useState } from "react"
import { Contact } from "../global/interfaces"

interface ContactListProps {
  contacts: Contact[]
}

export function ContactList({ contacts }: ContactListProps) {
  const [uniqueChars, setUniqueChars] = useState<string[]>([])

  const filterChars = () => {
    const firstChars = contacts.map((item) => {
      return item.first_name.charAt(0)
    })

    const uniqueChars = firstChars.filter((char, index) => {
      return firstChars.indexOf(char) === index
    })

    setUniqueChars(uniqueChars.sort())
  }

  useEffect(() => {
    filterChars()
  }, [contacts])

  return (
    <div className="contacts">
      <div className="contacts__container container">
        {uniqueChars.map((char, index) => {
          const contactList = contacts.filter((contact) => {
            return contact.first_name.charAt(0) === uniqueChars[index]
          })

          return <ContactLetterGroup char={char} contacts={contactList} />
        })}
      </div>
    </div>
  )
}
