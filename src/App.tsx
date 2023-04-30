import { useEffect, useState } from "react"
import { ContactList } from "./components/ContactList"
import { Header } from "./components/Header"
import { Contact } from "./global/interfaces"

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>("")

  const fetchContacts = async () => {
    setIsLoading(true)

    const response = await fetch("../mocks/MOCK_DATA.json")
    const jsonData: Contact[] = await response.json()

    if (jsonData) {
      setContacts(jsonData)
    }
  }

  const filterContacts = () => {
    const filtered: Contact[] =
      searchTerm.trim().length > 0 || searchTerm === ""
        ? contacts.filter(
            (contact) =>
              contact.first_name.toLocaleLowerCase().includes(searchTerm) ||
              contact.last_name.toLocaleLowerCase().includes(searchTerm) ||
              contact.phone.toLocaleLowerCase().includes(searchTerm)
          )
        : contacts

    setFilteredContacts(filtered)
    setIsLoading(false)
  }

  const handleSearchTerm = (
    searchTerm: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = searchTerm.target
    setSearchTerm(value)
  }

  useEffect(() => {
    filterContacts()
  }, [searchTerm])

  useEffect(() => {
    filterContacts()
  }, [contacts])

  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <div className="app">
      <Header searchTerm={searchTerm} onSearchTermChange={handleSearchTerm} />

      {isLoading && (
        <div className="contacts">
          <div className="contacts__container container">Carregando</div>
        </div>
      )}
      {!isLoading && <ContactList contacts={filteredContacts} />}
    </div>
  )
}
