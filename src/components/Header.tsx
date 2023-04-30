import IconAdd from "../assets/icons/add.svg"
import IconEdit from "../assets/icons/pencil.svg"
import IconDelete from "../assets/icons/trash.svg"
import IconSearch from "../assets/icons/search.svg"

interface HeaderProps {
  searchTerm: string
  onSearchTermChange: (searchTerm: React.ChangeEvent<HTMLInputElement>) => void
}

export function Header({ searchTerm, onSearchTermChange }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__content">
          <div className="header__headline">Meus Contatos</div>
          <div className="header__trailing">
            <button className="button button--icon">
              <img src={IconAdd} alt="" />
            </button>
            <button className="button button--icon">
              <img src={IconEdit} alt="" />
            </button>
            <button className="button button--icon">
              <img src={IconDelete} alt="" />
            </button>
          </div>
        </div>
        <form className="header__form">
          <img src={IconSearch} alt="" />
          <input
            type="search"
            placeholder="Busque por nome ou por dados de contato..."
            onChange={(ev) => onSearchTermChange(ev)}
            value={searchTerm}
          />
        </form>
      </div>
    </header>
  )
}
