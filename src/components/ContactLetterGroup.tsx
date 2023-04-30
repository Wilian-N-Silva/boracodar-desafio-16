import { ContactLetterGroupProps } from "../global/interfaces"
import { ContactCard } from "./ContactCard"

export function ContactLetterGroup({
  char,
  contacts,
}: ContactLetterGroupProps) {
  return (
    <div className="contacts__group">
      <div
        className="contacts__letter"
        style={{
          backgroundColor: `hsl(${Math.floor(Math.random() * 360)}, 100%, 35%)`,
        }}
      >
        {char}
      </div>
      <div className="contacts__wrapper">
        {contacts.map((contact) => {
          return <ContactCard {...contact} />
        })}
      </div>
    </div>
  )
}
