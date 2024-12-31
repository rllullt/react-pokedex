import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { debounce } from 'lodash';
import Header from '../components/header'
import '../styles/App.css'

function Pokegrid() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;
    
    const [pokemonData, setPokemonData] = useState([]);  // pokemons starts as an empty list
    const [paginatedData, setPaginatedData] = useState([]);

    const totalPages = Math.ceil(pokemonData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=1000")
            .then(data => data.json())
            .then(data => {
                const results = data.results.map((pokemon, index) => {
                    return {
                        'id': index+1,
                        'name': pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
                        'url': pokemon.url,
                        // Use front sprites as default
                        'sprite': `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`,
                    };
                });
                setPokemonData(results);
            })
    }, []);

    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const newFilteredData = pokemonData.filter(pokemon => 
            pokemon.name.toLowerCase().includes(lowerCaseSearchTerm)
        );
        setCurrentPage(1); // Returns to first page when filtering
        setPaginatedData(newFilteredData.slice(startIndex, startIndex + itemsPerPage));
      }, [searchTerm, pokemonData]);

    // Use lodash to wait the user to finish writing
    // Actually, it doesn’t let the user to write until the timing ¿?
    // const handleSearch = debounce(term => setSearchTerm(term), 300);
    const handleSearch = term => { setSearchTerm(term) }

    const handlePageChange = newPage => {
        if (0 < newPage && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <>
            <div>
                <Header />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
            <h1>
                Welcome to the Pokégrid!
            </h1>

            {/* Filter */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#f1f1f1',
                    borderRadius: '25px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    padding: '10px 15px',
                    marginTop: '30px',
                    marginBottom: '20px',
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    style={{ width: '20px', height: '20px', marginRight: '10px', color: '#888' }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 106.15 13.65z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={e => handleSearch(e.target.value)}
                    style={{
                        border: 'none',
                        outline: 'none',
                        backgroundColor: 'transparent',
                        flex: 1,
                        fontSize: '16px',
                    }}
                />
            </div>
            </div>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '16px',
                    padding: '16px',
                }}
            >
                {paginatedData.map(pokemon => (
                    <div
                        // className="card"
                        key={pokemon.id}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '16px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            backgroundColor: '#f9f9f9',
                        }}
                    >
                        <Link to={`/pokedex/${pokemon.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'grid', placeItems: 'center' }}>
                            <img src={pokemon.sprite} alt={pokemon.name} style={{ width: '80px', height: '80px' }} />
                            <h3>{pokemon.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Pagination controls */}
            <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    style={{ margin: '0 8px', padding: '8px 16px', cursor: 'pointer' }}
                >
                    &lt;
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    style={{ margin: '0 8px', padding: '8px 16px', cursor: 'pointer' }}
                >
                    &gt;
                </button>
            </div>
        </>
    );
};

export default Pokegrid;