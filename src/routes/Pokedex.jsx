import { useState } from 'react'
import Header from '../components/header'
import '../styles/App.css'

function Pokedex() {
    return (
        <>
            <div>
                <Header />
            </div>
            <h1>
                Welcome to the Pokédex!
            </h1>
            <div className='fixed top-0'>
                Pokédex
            </div>
        </>
    )
}

export default Pokedex;