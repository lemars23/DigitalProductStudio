import LogoLarge from './icons/Logo-large.svg';
import LogoMedium from './icons/Logo-medium.svg';
import LogoSmall from './icons/Logo-small.svg';

import './let-us-bring.scss';

const LetUsBring = () => {
    const sizeLogoIcon = document.body.clientWidth > 1920 ? LogoLarge : 
    document.body.clientWidth < 1920 && document.body.clientWidth > 390 ? LogoMedium : 
    document.body.clientWidth < 390 ? LogoSmall : null;

    return (
        <section className="let-us-bring">
            <div className="container">
                <img src={sizeLogoIcon} alt="Logo icon" className="let-us-bring__icon" />
                <div className="let-us-bring__container">
                    <h3 className="let-us-bring__title">
                        Let us Bring your Ideas to Life in the Digital World.
                    </h3>
                    <p className="let-us-bring__text">
                        No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.
                    </p>
                </div>
                <a href='/' className="let-us-bring__button">
                    start project
                </a>
            </div>
        </section>
    );
};

export default LetUsBring;