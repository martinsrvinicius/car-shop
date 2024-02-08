
import './styles.css'

const SearchBar = () => {
    return (
        <div className='search-container bg-gray'>
            <div className="searchbar-inner-container">
                <input value="" placeholder="Digite sua busca"></input>
                <button
                    className="btn btn-color"
                    type="button">
                    Buscar
                </button>
            </div>
        </div>
    );
}

export default SearchBar;