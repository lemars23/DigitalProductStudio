import LogoLarge from './icons/Logo-large.svg';
import LogoMedium from './icons/Logo-medium.svg';
import LogoSmall from './icons/Logo-small.svg';

import './start-project.scss';

const StartProject = (props) => {
    const {title, text} = props;

    const sizeLogoIcon = document.body.clientWidth > 1920 ? LogoLarge : 
    document.body.clientWidth < 1920 && document.body.clientWidth > 390 ? LogoMedium : 
    document.body.clientWidth < 390 ? LogoSmall : null;

    return (
        <section className="start-project">
            <div className="container">
                <img src={sizeLogoIcon} alt="Logo icon" className="start-project__icon" />
                <div className="start-project__container">
                    <h3 className="start-project__title">
                        {title}
                    </h3>
                    <p className="start-project__text">
                        {text}
                    </p>
                </div>
                <a href='/' className="start-project__button">
                    start project
                </a>
            </div>
        </section>
    );
};

export default StartProject;