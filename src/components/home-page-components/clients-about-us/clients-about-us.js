import NameSection from '../../name-section/name-section';

import JohnSmithIcon from './icons/profiles/1.png';
import SarahJohnsonIcon from './icons/profiles/2.png';
import MarkThompsonIcon from './icons/profiles/3.png';
import LauraAdamsIcon from './icons/profiles/4.png';
import MichaelAndersonIcon from './icons/profiles/5.png';
import EmilyTurnerIcon from './icons/profiles/6.png';

import './clients-about-us.scss';

const ClientAboutUsItem = (props) => {
    const {title, desc, icon, fullName, position} = props;

    return (
        <div className="clients-about-us__item">
            <div className="clients-about-us__item-title">{title}</div>
            <div className="clients-about-us__item-desc">{desc}</div>
            <div className="clients-about-us__item-profile">
                <img src={icon} alt="profile icon" className="clients-about-us__profile-icon" />
                <div className="clients-about-us__profile-data">
                    <div className="clients-about-us__profile-name">
                        {fullName}
                    </div>
                    <div className="clients-about-us__profile-position">
                        {position}
                    </div>
                </div>
                <a href="/" className="clients-about-us__link">open website</a>
            </div>
        </div>
    );
};

const ClientAboutUs = () => {
    const listClients = [
        {
            id: 1,
            title: "UXUID has been Instrumental in Transforming our Online Presence. ",
            desc: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
            icon: JohnSmithIcon,
            fullName: 'John Smith',
            position: 'CEO of Chic Boutique'
        },
        {
            id: 2,
            title: "Working with UXUID was a breeze.",
            desc: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. UXUID is a trusted partner we highly recommend.",
            icon: SarahJohnsonIcon,
            fullName: 'Sarah Johnson',
            position: 'Founder of HungryBites.'
        },
        {
            id: 3,
            title: "UXUID developed a comprehensive booking and reservation system for our event management company",
            desc: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
            icon: MarkThompsonIcon,
            fullName: 'Mark Thompson',
            position: 'CEO of EventMasters'
        },
        {
            id: 4,
            title: "ProTech Solutions turned to UXUID to automate our workflow",
            desc: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. UXUID's expertise and professionalism have made them a trusted technology partner.",
            icon: LauraAdamsIcon,
            fullName: 'Laura Adams',
            position: 'COO of ProTech Solutions.'
        },
        {
            id: 5,
            title: "UXUID designed and developed a captivating web portal for showcasing our real estate listings.",
            desc: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. UXUID's expertise in the real estate industry is unmatched.",
            icon: MichaelAndersonIcon,
            fullName: 'Michael Anderson',
            position: 'Founder of Dream Homes Realty.'
        },
        {
            id: 6,
            title: "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
            desc: "UXUID's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend UXUID for any health and fitness app development needs.",
            icon: EmilyTurnerIcon,
            fullName: 'Emily Turner',
            position: 'CEO of FitLife Tracker'
        },
    ];

    return (
        <section className="clients-about-us">
            <NameSection 
                title='What our Clients say About us' 
                subtitle="At UXUID, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
                backgroundImageNumber='first' />

            <div className="container">

                <div className="clients-about-us__list">

                    {
                        listClients.map((item, i) => 
                            <ClientAboutUsItem 
                                key={i} 
                                title={item.title}
                                desc={item.desc}
                                icon={item.icon}
                                fullName={item.fullName}
                                position={item.position}
                            />
                        )
                    }


                </div>

            </div>
        </section>
    )
};

export default ClientAboutUs;