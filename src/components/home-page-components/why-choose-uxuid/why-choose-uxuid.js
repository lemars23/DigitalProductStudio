import NameSection from '../../name-section/name-section';

import RewardIcon from './icons/reward.svg';
import ClientIcon from './icons/client.svg';
import ElectricPanelIcon from './icons/electrical-panel.svg';
import CrownIcon from './icons/crown.svg';

import './why-choose-uxuid.scss';

const WhyChooseUxuidItem = (props) => {
    const {src, title, desc} = props;

    return (
        <div className="why-choose-uxuid__item">
            <div className="why-choose-uxuid__item-heading">
                <img src={src} alt="why-choose-uxuid icon" className="why-choose-uxuid__item-icon" />
                <div className="why-choose-uxuid__item-title">{title}</div>
            </div>
            <div className="why-choose-uxuid__item-desc">{desc}</div>
        </div>
    );
}


const WhyChooseUxuid = () => {

    const listItems = [
        {
            src: RewardIcon,
            title: 'Expertise',
            desc: 'Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.'
        }, 
        {
            src: ElectricPanelIcon,
            title: 'Results-Driven Solutions',
            desc: 'Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.'
        },
        {
            src: ClientIcon,
            title: 'Client-Centric Approach',
            desc: 'We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.'
        },
        {
            src: CrownIcon,
            title: 'Collaborative Partnership',
            desc: 'We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.'
        },
    ];

    return (
        <section className="why-choose-uxuid">
            <NameSection title='Why Choose UXUID?' subtitle='Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.' backgroundImageNumber='second' />

            <div className="container">
                <div className="why-choose-uxuid__list">
                {
                    listItems.map((item, i) => <WhyChooseUxuidItem key={i} src={item.src} title={item.title} desc={item.desc} />)
                }
                </div>
            </div>
        </section>
    )
};

export default WhyChooseUxuid;