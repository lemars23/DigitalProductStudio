import LogoLarge from './icons/Logo-large.svg';
import LogoMedium from './icons/Logo-medium.svg';
import LogoSmall from './icons/Logo-small.svg';

import './logotype.scss';

const Logotype = () => {
    const sizeLogoIcon = document.body.clientWidth > 1920 ? LogoLarge : 
    document.body.clientWidth < 1920 && document.body.clientWidth > 390 ? LogoMedium : 
    document.body.clientWidth < 390 ? LogoSmall : null;

    return (
        <a href="/" className="logo" key={1}>
            <img src={sizeLogoIcon} alt="Logo icon" className="logo__icon" />
            <p className="logo__brand">
                <span className="logo__brand_bold">uxui</span>d
            </p>
        </a>
    );
};

export default Logotype;