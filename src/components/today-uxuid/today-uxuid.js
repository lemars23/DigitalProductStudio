import './today-uxuid.scss';

import Logo from './icons/Logo-large.svg';

const TodayUxuid = () => {

    return (
        <section className="today-uxuid">
            <div className="container">
                <div className="today-uxuid__content">
                    <img src={Logo} alt="Logo icon" className="today-uxuid__icon" />

                    <div className="today-uxuid__info">
                        <h3 className="today-uxuid__title">
                            Today, UXUID Continues to Thrive as a Leading Digital Product Agency.....
                        </h3>
                        <div className="today-uxuid__text">
                            Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.
                        </div>
                    </div>
                </div>

                <div className="today-uxuid__project">
                    <div className="today-uxuid__project-title">
                        Welcome to UXUID
                    </div>
                    <div className="today-uxuid__project-content">
                        Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
                    </div>
                    <a href="/" className="today-uxuid__project-button">
                        Start Project
                    </a>
                </div>
                
            </div>
        </section>
    );
};

export default TodayUxuid;