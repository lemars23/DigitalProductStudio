import DescriptionSection from '../description-section/description-section';

import FirstImage from './images/1.png';
import SecondImage from './images/2.png';
import ThirdImage from './images/3.png';
import FourthImage from './images/4.png';
import FivethImage from './images/5.png';
import SixthImage from './images/6.png';
import SeventhImage from './images/7.png';
import EighthImage from './images/8.png';
import NinethImage from './images/9.png';
import TenthImage from './images/10.png';

import ArrowIcon from './icons/arrow.svg';

import './our-works-components.scss';

// window.addEventListener('resize', () => {
//     const itemsName = document.querySelector('.our-works__item-name');
//     console.log(getComputedStyle(itemsName).height);
// });


const OurWorksItem = (props) => {
    const {name, image, title, linkText, linkHref, desc} = props;
    return (
        <li className="our-works__item">
            <div className="our-works__item-name">{name}</div>
            <img src={image} alt="our-works-icon" className="our-works__item-image" />
            <div className="our-works__item-data">
                <div className="our-works__data-content">
                    <div className="our-works__content-title">{title}</div>
                    <div className="our-works__content-link">{linkText}</div>
                </div>
                <a href={linkHref} className="our-works__data-arrow">
                    <img src={ArrowIcon} alt="arrow icon" className="our-works__arrow-icon" />
                </a>
            </div>
            <div className="our-works__item-desc"> {desc} </div>
        </li>
    );
};

const OurWorksComponents = () => {
    const listOurWorks = [
        {
            name: 'E-Commerce Platform for Fashion Hub',
            image: FirstImage,
            title: 'Chic Boutique',
            linkText: 'htttps:/www.chicboutique.com',
            linkHref: '/',
            desc: 'We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.'
        },
        {
            name: 'Mobile App for Food Delivery Service',
            image: SecondImage,
            title: 'HungryBites',
            linkText: 'htttps:/www.hungrybites.com',
            linkHref: '/',
            desc: 'HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.'
        },
        {
            name: 'Booking and Reservation System for Event Management',
            image: ThirdImage,
            title: 'EventMasters',
            linkText: 'htttps:/www.eventmasters.com',
            linkHref: '/',
            desc: 'EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.'
        },
        {
            name: 'Custom Software for Workflow Automation',
            image: FourthImage,
            title: 'ProTech Solutions',
            linkText: 'htttps:/www.protechsolutions.com',
            linkHref: '/',
            desc: 'HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.'
        },
        {
            name: 'Web Portal for Real Estate Listings',
            image: FivethImage,
            title: 'Dream Homes Realty',
            linkText: 'htttps:/www.dreamhomesrealty.com',
            linkHref: '/',
            desc: 'Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.'
        },
        {
            name: 'Mobile App for Fitness Tracking',
            image: SixthImage,
            title: 'FitLife Tracker',
            linkText: 'htttps:/www.fitlifetracker.com',
            linkHref: '/',
            desc: 'FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.'
        },
        {
            name: 'Custom Software for Supply Chain Management',
            image: SeventhImage,
            title: 'Global Logistics Solutions',
            linkText: 'htttps:/www.globallogisticssolutions.com',
            linkHref: '/',
            desc: 'Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.'
        },
        {
            name: 'Educational Platform for Online Learning',
            image: EighthImage,
            title: 'EduConnect',
            linkText: 'htttps:/www.educonnect.com',
            linkHref: '/',
            desc: 'EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.'
        },
        {
            name: 'Mobile App for Travel Planning',
            image: NinethImage,
            title: 'WanderWise',
            linkText: 'htttps:/www.wanderwise.com',
            linkHref: '/',
            desc: 'WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations.'
        },
        {
            name: 'Web Application for Customer Relationship Management',
            image: TenthImage,
            title: 'ConnectCRM',
            linkText: 'htttps:/www.connectcrm.com',
            linkHref: '/',
            desc: 'ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.'
        },
    ];

    return (
        <section className="our-works">
            <DescriptionSection  
                title='At UXUID' 
                text='We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.' 
                content='Here are ten examples of our notable works:'
            />
            <div className="container">
                <ul className="our-works__list">
                    {
                        listOurWorks.map((item, i) => 
                        <OurWorksItem 
                            key={i} 
                            name={item.name} 
                            image={item.image} 
                            title={item.title} 
                            linkText={item.linkText} 
                            linkHref={item.linkHref} 
                            desc={item.desc}     
                        />)
                    }
                </ul>
            </div>
        </section>
    )
};
 

export default OurWorksComponents;
