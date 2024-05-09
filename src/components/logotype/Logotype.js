import Logo from './icons/Logo-large.svg';

import './logotype.scss';

const Logotype = () => {
    
    return (
        <a href="/" className="logo" key={1}>
            <img src={Logo} alt="Logo icon" className="logo__icon" />
            <p className="logo__brand">
                <span className="logo__brand_bold">uxui</span>d
            </p>
        </a>
    );
};

export default Logotype;