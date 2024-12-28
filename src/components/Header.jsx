import pokeball from '../assets/pokeball_icon.svg'

function Header() {
    return (
        <div className="fixed top-0 z-50 backdrop-blur-sm border-b">
            <div className="flex items-center px-5">
                <a className="block w-{12rem}" href="#">
                    <img src={pokeball} width={190} height={190} alt="Pokeball" />
                </a>

                <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent">
                    <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                        1 2 3
                    </div>
                </nav>
            </div>
            Header
        </div>
  )
}

export default Header;