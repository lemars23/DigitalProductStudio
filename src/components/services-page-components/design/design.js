import DescriptionSection from '../../description-section/description-section';

import '../services-page.scss';

import UserResearchIcon from './icons/user-research.svg';
import InformationArchitectureIcon from './icons/info-architecture.svg';
import InteractivePrototypingIcon from './icons/interactive-prototyping.svg';
import UiDesignIcon from './icons/ui-design.svg';

import IntuitiveIcon from './icons/intuitive.svg';
import CustomIconographyIcon from './icons/custom-icon.svg';
import TypographyIcon from './icons/typography.svg';
import ResponsiveDesignIcon from './icons/responsive-design.svg';

import LogoDesignIcon from './icons/logo-design.svg';
import BrandStrategyIcon from './icons/brand-strategy.svg';
import BrandGuidelinesIcon from './icons/brand-guidelines.svg';
import MarketingCollateralIcon from './icons/marketing-collateral.svg';

const ListItem = (props) => {
    const {id, icon, name} = props;
    return (
    <li className="service-section__item">
        <img src={icon} alt="service icon" className="service-section__item-icon" />
        <div className="service-section__item-name">{name}</div>
    </li>
    )
};


const Design = () => {
    const listUserExperience = [
        {
            name: 'User Research and Persona Development',
            icon: UserResearchIcon
        },
        {
            name: 'Information Architecture and Wireframing',
            icon: InformationArchitectureIcon
        },
        {
            name: 'Interactive Prototyping and User Testing',
            icon: InteractivePrototypingIcon
        },
        {
            name: 'UI Design and Visual Branding',
            icon: UiDesignIcon
        },
    ];

    const listUserInterface = [
        {
            name: 'Intuitive and Visually Appealing Interface Design',
            icon: IntuitiveIcon
        },
        {
            name: 'Custom Iconography and Illustration',
            icon: CustomIconographyIcon
        },
        {
            name: 'Typography and Color Palette Selection',
            icon: TypographyIcon
        },
        {
            name: 'Responsive Design for Various Devices',
            icon: ResponsiveDesignIcon
        },
    ];

    const listBrand = [
        {
            name: 'Logo Design and Visual Identity Development',
            icon: LogoDesignIcon
        },
        {
            name: 'Brand Strategy and Positioning',
            icon: BrandStrategyIcon
        },
        {
            name: 'Brand Guidelines and Style Guides',
            icon: BrandGuidelinesIcon
        },
        {
            name: 'Marketing Collateral Design (Brochures, Business Cards, etc.)',
            icon: MarketingCollateralIcon
        },
    ];

    return (
        <section className="service-section">
            <DescriptionSection
                title='Design'
                text="At UXUID, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
                content='Our design services include:'
            />
            <div className="container">
                <div className="service-section__title">
                    User Experience (UX) Design
                </div>
                <ul className="service-section__list">
                    {
                        listUserExperience.map((item, i) => 
                           <ListItem key={i} icon={item.icon} name={item.name} />
                        )
                    }
                    
                </ul>
                <div className="service-section__title">
                    User Interface (UI) Design
                </div>
                <ul className="service-section__list">
                    {
                        listUserInterface.map((item, i) => 
                           <ListItem key={i} icon={item.icon} name={item.name} />
                        )
                    }
                </ul>
                <div className="service-section__title">
                    Branding and Identity
                </div>
                <ul className="service-section__list">
                    {
                        listBrand.map((item, i) => 
                           <ListItem key={i} icon={item.icon} name={item.name} />
                        )
                    }
                </ul>
            </div>
        </section>
    );

};


export default Design;