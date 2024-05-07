import DescriptionSection from '../../description-section/description-section';

import '../services-page.scss';

import FrontendIcon from './icons/front-end.svg';
import BackendIcon from './icons/back-end.svg';
import CmsIcon from './icons/cms.svg';
import ECommerceIcon from './icons/e-commerce.svg';

import NativeMobileAppIcon from './icons/native-mobile-app.svg';
import CrossPlatformAppIcon from './icons/cross-platform-app.svg';
import AppPrototypeIcon from './icons/app-prototyping.svg';
import AppTestingIcon from './icons/app-testing.svg';

import EnterpriseSoftwareIcon from './icons/enterprise-software.svg';
import CustomWebAppIcon from './icons/custom-web-app.svg';
import IntegrationIcon from './icons/integration.svg';
import LegacySystemIcon from './icons/legacy-system.svg';

const ListItem = (props) => {
    const {id, icon, name} = props;
    return (
    <li className="service-section__item">
        <img src={icon} alt="service icon" className="service-section__item-icon" />
        <div className="service-section__item-name">{name}</div>
    </li>
    )
}

const Engineering = () => {
    const listWebDev = [
        {
            name: 'Front-End Development (HTML, CSS, JavaScript)',
            icon: FrontendIcon
        },
        {
            name: 'Back-End Development (PHP, Python, Ruby)',
            icon: BackendIcon
        },
        {
            name: 'Content Management System (CMS) Development (WordPress, Drupal)',
            icon: CmsIcon
        },
        {
            name: 'E-Commerce Platform Development (Magento, Shopify)',
            icon: ECommerceIcon
        }
    ];

    const listMobileAppDev = [
        {
            name: 'Native iOS and Android App Development',
            icon: NativeMobileAppIcon
        },
        {
            name: 'Cross-Platform App Development (React Native, Flutter)',
            icon: CrossPlatformAppIcon
        },
        {
            name: 'App Prototyping and UI/UX Design Integration',
            icon: AppPrototypeIcon
        },
        {
            name: 'App Testing, Deployment, and Maintenance',
            icon: AppTestingIcon
        }
    ];

    const listCustomSoftwareDev = [
        {
            name: 'Enterprise Software Development',
            icon: EnterpriseSoftwareIcon
        },
        {
            name: 'Custom Web Application Development',
            icon: CustomWebAppIcon
        },
        {
            name: 'Integration with Third-Party APIs and Systems',
            icon: IntegrationIcon
        },
        {
            name: 'Legacy System Modernization and Migration',
            icon: LegacySystemIcon
        }
    ];

    return (
    <section className="service-section">
        <DescriptionSection
            title='Engineering'
            text="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
            content='Our engineering services include:'
        />
        <div className="container">
            <div className="service-section__title">
                Web Development
            </div>
            <ul className="service-section__list">
                {
                    listWebDev.map((item, i) => 
                        <ListItem key={i} icon={item.icon} name={item.name} />
                    )
                }
            </ul>
            <div className="service-section__title">
                Mobile App Development
            </div>
            <ul className="service-section__list">
                {
                    listMobileAppDev.map((item, i) => 
                        <ListItem key={i} icon={item.icon} name={item.name} />
                    )
                }
            </ul>
            <div className="service-section__title">
                Custom Software Development
            </div>
            <ul className="service-section__list">
                {
                    listCustomSoftwareDev.map((item, i) => 
                        <ListItem key={i} icon={item.icon} name={item.name} />
                    )
                }
            </ul>
        </div>
    </section>
    )
};

export default Engineering;