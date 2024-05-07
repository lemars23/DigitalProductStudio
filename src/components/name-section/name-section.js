import './name-section.scss';

import backgroundFirst from './images/background.png';
import backgroundFirstMini from './images/background-mini.png';
import backgroundSecond from './images/backgroundSecond.png';
import backgroundSecondMini from './images/backgroundSecond-mini.png';
import backgroundThird from './images/backgroundThird.png';
import backgroundThirdMini from './images/backgroundThird-mini.png';
import backgroundFourth from './images/backgroundFourth.png';
import backgroundFourthMini from './images/backgroundFourth-mini.png';
import backgroundFiveth from './images/backgroundFiveth.png';
import backgroundFivethMini from './images/backgroundFiveth-mini.png';

const getContainerBackground = (backgroundImageNumber) => {
    const backgrounds = {
        'first': {
            'big': backgroundFirst,
            'small': backgroundFirstMini
        },
        'second': {
            'big': backgroundSecond,
            'small': backgroundSecondMini
        },
        'third': {
            'big': backgroundThird,
            'small': backgroundThirdMini
        },
        'fourth': {
            'big': backgroundFourth,
            'small': backgroundFourthMini
        },
        'fiveth': {
            'big': backgroundFiveth,
            'small': backgroundFivethMini
        },
    };

    const getImage = document.body.clientWidth > 390 ? backgrounds[backgroundImageNumber].big : backgrounds[backgroundImageNumber].small; 

    return (
        <div className="container__background" style={{backgroundImage: `url(${getImage})`}}></div>
    );
};  

const NameSection = (props) => {
    const {title, subtitle, backgroundImageNumber} = props;
    return (
        <div className='name-section'>
            <div className="container">
                {getContainerBackground(backgroundImageNumber)}

                <h1 className="name-section__title">
                    {title}
                </h1>
                <p className="name-section__subtitle">
                    {subtitle}
                </p>

            </div>
        </div>
    )
};

export default NameSection;