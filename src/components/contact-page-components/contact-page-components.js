import MailIcon from './icons/mail.svg';
import TelIcon from './icons/tel.svg';
import LocationIcon from './icons/location.svg';

import './contact-page-components.scss';

const ContactPageComponents = () => {
    return (
        <section className="contact">
            <div className="container">
                <ul className="contact__list">
                    <li className="contact__item">
                        <a href="mailto:hello@uxuid.ru" className="contact__item-link">
                            <img src={MailIcon} alt="contact icon" className='contact__item-icon' />
                            <span className="contact__item-text">
                                hello@uxuid.ru
                            </span>
                        </a>
                    </li>
                    <li className="contact__item">
                        <a href="tel:+91 91813 23 2309" className='contact__item-link'>
                            <img src={TelIcon} alt="contact icon" className='contact__item-icon' />
                            <span className="contact__item-text">
                                +91 91813 23 2309
                            </span>
                        </a>
                    </li>
                    <li className="contact__item contact__item-location">
                        <img src={LocationIcon} alt="contact icon" className='contact__item-icon' />
                        <span className="contact__item-text">
                            Get Location
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default ContactPageComponents;