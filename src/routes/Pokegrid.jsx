import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Header from '../components/header'
import '../styles/App.css'

function Pokegrid() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;
    
    const [pokemonData, setPokemonData] = useState([]);  // pokemons queda como una lista, inicializada vacía

    const totalPages = Math.ceil(pokemonData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
            .then(data => data.json())
            .then(data => {
                const results = data.results.map((pokemon, index) => {
                    return {
                        'id': index+1,
                        'name': pokemon.name,
                        'url': pokemon.url,
                        // Use front sprites as default
                        'sprite': `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`,
                    };
                });
                setPokemonData(results);
            })
    }, []);

    const paginatedData = pokemonData.slice(startIndex, startIndex + itemsPerPage);

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
                        <Link to={`/pokedex/${pokemon.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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