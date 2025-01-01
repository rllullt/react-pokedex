import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // This gives toBeInTheDocument
import '@babel/preset-react';
import PokedexInfo from '../../../src/components/PokedexInfo';

describe('PokedexInfo', () => {
    it('shows the pokemon info', () => {
        render(<PokedexInfo
                number="14"
                name="Kakuna"
                types={["bug","poison"]}
                description="This pokemon has 1 abilities: shed-skin. Also, it has 5 moves."
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png`}
                weight="100"
                height="6"
            />);
        
        // Verify whether the text is in the document
        expect(screen.getByText('#14')).toBeInTheDocument();
        expect(screen.getByText('Kakuna')).toBeInTheDocument();
        expect(screen.getByText('bug')).toBeInTheDocument();
        expect(screen.getByText('poison')).toBeInTheDocument();
        expect(screen.getByText('This pokemon has 1 abilities: shed-skin. Also, it has 5 moves.')).toBeInTheDocument();
        expect(screen.getByText('100 kg')).toBeInTheDocument();
        expect(screen.getByText('6 m')).toBeInTheDocument();
    });
});
