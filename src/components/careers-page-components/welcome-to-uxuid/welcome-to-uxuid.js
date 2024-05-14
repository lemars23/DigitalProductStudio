import DescriptionSection from '../../description-section/description-section';

import './welcome-to-uxuid.scss';

const CareersWelcome = () => {

    return (
        <section className="welcome-to-uxuid">
            <DescriptionSection
                title='Welcome to UXUID, where talent meets opportunity!' 
                text="At UXUID, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us." 
                content='Why Work at UXUID?'
            />
            <div className="container">
                <ul className="welcome-to-uxuid__list">
                    <li className="welcome-to-uxuid__item">
                        <div className="welcome-to-uxuid__item-title">Innovative and Impactful Projects</div>
                        <div className="welcome-to-uxuid__item-desc">At UXUID, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.</div>
                    </li>
                    <li className="welcome-to-uxuid__item">
                        <div className="welcome-to-uxuid__item-title">Supportive Environment</div>
                        <div className="welcome-to-uxuid__item-desc">At UXUID, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.</div>
                    </li>
                    <li className="welcome-to-uxuid__item">
                        <div className="welcome-to-uxuid__item-title">Continuous Learning and Growth</div>
                        <div className="welcome-to-uxuid__item-desc">We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At UXUID, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies.</div>
                    </li>
                    <li className="welcome-to-uxuid__item">
                        <div className="welcome-to-uxuid__item-title">Challenging and Rewarding Work</div>
                        <div className="welcome-to-uxuid__item-desc">Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life.</div>
                    </li>
                </ul>
            </div>
        </section>
    )

}; 

export default CareersWelcome;