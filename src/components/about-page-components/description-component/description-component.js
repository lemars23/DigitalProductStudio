
import './description-component.scss';

import AboutDescImage from './image/desc-image.png';

const AboutDescriptionComponent = () => {
    return (
        <section className="about-description">
            <div className="about-description__inner">
                <div className="container">
                    <div className="about-description__content">
                        <div className="about-description__title">About UXUID</div>
                        <div className="about-description__text">
                            UXUID is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At UXUID, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.
                        </div>
                    </div>
                    <img src={AboutDescImage} alt="about us icon" className="about-description__image" />
                </div>
            </div>
        </section>
    );
};

export default AboutDescriptionComponent;