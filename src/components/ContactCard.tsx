import { Contact } from "../global/interfaces"

export function ContactCard({ first_name, last_name, phone }: Contact) {
  return (
    <div className="contacts__card">
      <div className="contacts__avatar">
        <img src="" alt="" />
      </div>
      <div className="contacts__info">
        <div className="contacts__name">{`${first_name} ${last_name}`}</div>
        <div className="contacts__phone">{phone}</div>
      </div>
    </div>
  )
}
