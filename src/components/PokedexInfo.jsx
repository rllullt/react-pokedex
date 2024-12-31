import React from 'react';

const PokedexInfo = ({ number, name, types, description, image, weight, height }) => {
    return (
        <div
            style={{
                maxWidth: '350px',
                margin: '16px auto',
                padding: '16px',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                backgroundColor: '#f8f9fa',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            {/* Header: Name and number */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                }}
            >
                <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>{name}</h2>
                <span
                    style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#888',
                    }}
                >
                #{number}
                </span>
            </div>

            {/* Image */}
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <img
                    src={image}
                    alt={name}
                    style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'contain',
                    }}
                />
            </div>

            {/* Types */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    marginBottom: '16px',
                }}
            >
                {types.map(type => (
                    <span
                        key={type}
                        style={{
                            padding: '4px 8px',
                            borderRadius: '8px',
                            backgroundColor: getTypeColor(type),
                            color: '#fff',
                            fontSize: '12px',
                            fontWeight: 'bold',
                        }}
                    >
                        {type}
                    </span>
                ))}
            </div>

            {/* Description */}
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '16px' }}>{description}</p>

            {/* Additional data */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <div>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>WT:</span>{' '}
                <span style={{ fontSize: '14px' }}>{weight} kg</span>
                </div>
                <div>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>HT:</span>{' '}
                <span style={{ fontSize: '14px' }}>{height} m</span>
                </div>
            </div>
        </div>
    );
};

// Function for obtaining the color by Pokémon type
const getTypeColor = (type) => {
    const typeColors = {
        Fire: '#F08030',
        Water: '#6890F0',
        Grass: '#78C850',
        Electric: '#F8D030',
        Psychic: '#F85888',
        Ice: '#98D8D8',
        Dragon: '#7038F8',
        Dark: '#705848',
        Fairy: '#EE99AC',
        Normal: '#A8A878',
        Fighting: '#C03028',
        Flying: '#A890F0',
        Poison: '#A040A0',
        Ground: '#E0C068',
        Rock: '#B8A038',
        Bug: '#A8B820',
        Ghost: '#705898',
        Steel: '#B8B8D0',
    };
    return typeColors[type] || '#A8A878'; // Unknown colors
};

export default PokedexInfo;
