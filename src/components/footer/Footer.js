import Logotype from '../logotype/Logotype';

import FacebookIcon from './icons/facebook.svg';
import TwitterIcon from './icons/twitter.svg';
import TelegramIcon from './icons/telegram.svg';

import MailIcon from './icons/mail.svg';
import PhoneIcon from './icons/phone.svg';
import LocationIcon from './icons/location.svg';

import './footer.scss';

const navLinks = [
    {id: 1, name: 'home', href: '/'},
    {id: 2, name: 'services', href: '/services'},
    {id: 3, name: 'work', href: '/work'},
    {id: 4, name: 'process', href: '/process'},
    {id: 5, name: 'about', href: '/about'},
    {id: 6, name: 'careers', href: '/careers'},
    {id: 7, name: 'contact', href: '/contact'},
];

const connectionList = [
    {
        id: 1,
        href: 'https://www.facebook.com/?locale=ru_RU',
        src: FacebookIcon,
        alt: 'facebook icon'
    },
    {
        id: 2,
        href: 'https://twitter.com/?lang=ru',
        src: TwitterIcon,
        alt: 'facebook icon'
    },
    {
        id: 3,
        href: 'https://web.telegram.org',
        src: TelegramIcon,
        alt: 'telegram icon'
    },
]

const Footer = () => {
    return (
        (
            <footer className='footer'>
                <div className="container">
                    <div className="footer__menu">
                        {
                            document.body.clientWidth > 390 ? 
                                <Logotype/> : 
                                <div className='footer__logo'>
                                    <Logotype/>
                                </div>
                        }
                        
                        <ul className="footer__nav">
                            {
                                navLinks.map(item => 
                                <li className='footer__item' key={item.id}>
                                    <a href={item.href} className="footer__link">{item.name}</a>
                                </li>)
                            }
                        </ul>
                        <div className="footer__connections">
                            <div className="footer__connected">
                                stay connected
                            </div>
                            <ul className="footer__connections-list">
                                {
                                    connectionList.map(item => 
                                    <li className='footer__connections-item' key={item.id}>
                                        <a href={item.href} className="footer__connections-link">
                                            <img src={item.src} alt={item.alt} className="footer__connections-icon" />
                                        </a>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="footer__data">
                        <ul className="footer__data-list">
                            <li className="footer__data-item">
                                <img src={MailIcon} alt="mail icon" className="footer__data-icon" />
                                <a href="mailto:hello@uxuid.ru" className="footer__data-link">
                                    hello@uxuid.ru
                                </a>
                            </li>
                            <li className="footer__data-item">
                                <img src={PhoneIcon} alt="phone icon" className="footer__data-icon" />
                                <a href="tel:+9191813232309" className="footer__data-link">
                                    +91 91813 23 2309
                                </a>
                            </li>
                            <li className="footer__data-item">
                                <img src={LocationIcon} alt="location icon" className="footer__data-icon" />
                                <span className="footer__data-text">
                                    Somewhere in the World
                                </span>
                            </li>
                        </ul>
                        <div className="footer__data-copyright">
                            © 2023 UXUID. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        )
    );
};

export default Footer;