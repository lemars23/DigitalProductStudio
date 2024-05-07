import NameSection from "../../name-section/name-section";

import BrushIcon from './icons/brush.svg';
import PazzleIcon from './icons/pazzle.svg';
import EnergeeIcon from './icons/energee.svg';

import './our-services.scss';

const OurServicesItem = (props) => {
    const {src, title, desc} = props;

    return (
        <li className="our-services__item">
            <div className="our-services__mobile">
                <img src={src} alt="" className="our-services__mobile-icon" />
                <div className="our-services__mobile-title">{title}</div>
            </div>
            <img src={src} alt="our-services icon" className="our-services__item-icon" />
            <div className="our-services__item-title">{title}</div>
            <div className="our-services__item-desc">{desc}</div>
            <a href="/" className="our-services__item-link">Learn More</a>
        </li>
    );
};


const OurServices = () => {
    const arrayItems = [
        {
            id: 1,
            src: BrushIcon,
            title: 'Design',
            desc: "At UXUID, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
        },
        {
            id: 2,
            src: PazzleIcon,
            title: 'Engineering',
            desc: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
        },
        {
            id: 3,
            src: EnergeeIcon,
            title: 'Project Management',
            desc: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
        }
    ];

    return (
        <section className="our-services">
            <NameSection title='Our Services' 
                subtitle='Transform your brand with our innovative digital solutions that captivate and engage your audience.' 
                backgroundImageNumber='fourth' />
            <div className="container">
                <ul className="our-services__list">
                    {arrayItems.map((item, i) => 
                        <OurServicesItem 
                            key={i} 
                            src={item.src}
                            title={item.title}
                            desc={item.desc}
                        />
                    )}
                </ul>
            </div>
        </section>
    );
}

export default OurServices;