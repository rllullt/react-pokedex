import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import pokedexLogo from '../assets/pokedex_logo.png'

function Header() {
    const navigate = useNavigate();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation)
            setOpenNavigation(false)
        else
            setOpenNavigation(true);
    }

    const navigationElems = [
        {
            id: '0',
            url: '/uno',
            title: 'Uno',
        },
        {
            id: '1',
            url: '/dos',
            title: 'Dos',
        },
    ]
    return (
        <div className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b border-n-6 bg-n-8/90 lg:bg-n-8/90 lg:backdrop-blur-sm`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <button className="block w-{12rem} xl:mr-8" onClick={() => { navigate('/'); }}>
                    <img src={pokedexLogo} width={180} alt="Pokeball" />
                </button>

                {/* Navbar */}
                <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                        {navigationElems.map(item => (
                            <a
                                key={item.id}
                                href={item.url}
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-color hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>
                <button className='ml-auto lg:hidden px-3' onClick={toggleNavigation}>
                    <div className={`${openNavigation ? 'hidden' : 'flex'}`}>
                        ☰
                    </div>
                    <div className={`${openNavigation ? 'flex' : 'hidden'}`}>
                        ⨉
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Header;