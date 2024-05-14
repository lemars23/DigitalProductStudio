
import './our-story-component.scss';
 
const AboutOurStoryComponent = () => {
    return (
        <section className="about-story">
            <div className="container">
                <div className="about-story__title">Our Story</div>
                <ul className="about-story__list">
                    <li className="about-story__item">
                        <div className="about-story__item-data">
                            <div className="about-story__item-number">01</div>
                            <div className="about-story__item-title">Design</div>
                        </div>
                        <div className="about-story__item-desc">Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded UXUID Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.</div>
                    </li>
                    <li className="about-story__item">
                        <div className="about-story__item-data">
                            <div className="about-story__item-number">02</div>
                            <div className="about-story__item-title">Engineering</div>
                        </div>
                        <div className="about-story__item-desc">
                            Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of UXUID. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.
                        </div>
                    </li>
                    <li className="about-story__item">
                        <div className="about-story__item-data">
                            <div className="about-story__item-number">03</div>
                            <div className="about-story__item-title">Project Management</div>
                        </div>
                        <div className="about-story__item-desc">In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded UXUID's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.</div>
                    </li>
                    <li className="about-story__item">
                        <div className="about-story__item-data">
                            <div className="about-story__item-number">04</div>
                            <div className="about-story__item-title">Collaboration</div>
                        </div>
                        <div className="about-story__item-desc">
                            At UXUID, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default AboutOurStoryComponent;