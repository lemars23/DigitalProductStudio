import BurgerMenu from './icons/Burger-menu.svg';
import CrossMenu from './icons/Cross.svg';

import Logotype from '../logotype/logotype';

import './navigation.scss';


const chooseNav = function() {


    const onClickBurgerMenu = () => {
        const navigationContent = document.querySelector('.navigation__content');
        const navigationList = document.querySelector('.navigation__list');

        if (navigationContent.classList.contains('navigation__close') && navigationList.classList.contains('navigation__close')) {
            navigationContent.classList.remove('navigation__close');
            navigationList.classList.remove('navigation__close');
        }

        navigationList.classList.add('navigation__flex');
        navigationContent.classList.add('navigation__open');
    };

    const onClickCloseMenu = () => {
        const navigationContent = document.querySelector('.navigation__content');
        const navigationList = document.querySelector('.navigation__list');

        if (navigationContent.classList.contains('navigation__open') && navigationList.classList.contains('navigation__flex')) {
            navigationContent.classList.remove('navigation__open');
            navigationList.classList.remove('navigation__flex');
        }

        navigationList.classList.add('navigation__close');
        navigationContent.classList.add('navigation__close');
    };

    if(document.body.clientWidth > 390) {
        return (
        <>
            <Logotype/>
            <ul className="navigation__list">
                <li className="navigation__item"><a href="/" className="li navigation__link">home</a></li>
                <li className="navigation__item"><a href="/services" className="li navigation__link">services</a></li>
                <li className="navigation__item"><a href="/work" className="li navigation__link">work</a></li>
                <li className="navigation__item"><a href="/process" className="li navigation__link">process</a></li>
                <li className="navigation__item"><a href="/about" className="li navigation__link">about</a></li>
                <li className="navigation__item"><a href="/careers" className="li navigation__link">careers</a></li>
            </ul>
            <a href="/contact" className="navigation__contact">
                contact us
            </a>
        </>
        );
    } else if(document.body.clientWidth < 390) {
        return (
            <>
                <div className="navigation__panel">
                    <Logotype/>

                    <div className="burger-menu" onClick={onClickBurgerMenu}>
                        <img src={BurgerMenu} alt="Burger-menu icon" className='burger-menu__icon' />
                    </div>
                </div> 
                
                <div className="navigation__content">
                    <div className="navigation__cross">
                        <img src={CrossMenu} alt="Cross icon" className="navigation__cross-icon" onClick={onClickCloseMenu} />
                    </div>
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="/" className="navigation__link">home</a></li>
                        <li className="navigation__item"><a href="/services" className="navigation__link">services</a></li>
                        <li className="navigation__item"><a href="/work" className="navigation__link">work</a></li>
                        <li className="navigation__item"><a href="/process" className="navigation__link">process</a></li>
                        <li className="navigation__item"><a href="/about" className="navigation__link">about</a></li>
                        <li className="navigation__item"><a href="/careers" className="navigation__link">careers</a></li>
                        <li className="navigation__item"><a href="/contact" className="navigation__link">contact us</a></li>
                    </ul>
                </div>
            </>
        );
    }
};


const Navigation = () => {

    return (
    <nav className="navigation">
        <div className="container">
            {chooseNav()}
        </div>
    </nav>
    );
};

export default Navigation;