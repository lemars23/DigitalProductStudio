import DiagramGreen from './diagrams/green.svg';

import AdobeBigIcon from './icons/adobe/adobe-big.svg';
import AdobeSmallIcon from './icons/adobe/adobe-small.svg';

import AmazonBigIcon from './icons/amazon/amazon-big.svg';
import AmazonSmallIcon from './icons/amazon/amazon-small.svg';

import SlackBigIcon from './icons/slack/slack-big.svg';
import SlackSmallIcon from './icons/slack/slack-small.svg';

import SpotifyBigIcon from './icons/spotify/spotify-big.svg';
import SpotifySmallIcon from './icons/spotify/spotify-small.svg';

import ZapierBigIcon from './icons/zapier/zapier-big.svg';
import ZapierSmallIcon from './icons/zapier/zapier-small.svg';

import ZoomBigIcon from './icons/zoom/zoom-big.svg';
import ZoomSmallIcon from './icons/zoom/zoom-small.svg';

import './hero-section.scss';

function checkSizeIcon(big, small) {
    return document.body.clientWidth > 1920 ? big : document.body.clientWidth < 1920 && document.body.clientWidth > 390 ? small : document.body.clientWidth < 390 ? small : null;
}

const HeroSectionComponiesContent = () => {
    return (
        <>
            <p className="hero-section__companies-trusted">Trusted By 250+ Companies</p>
            <ul className="hero-section__companies-list">
                <li className="hero-section__companies-item">
                    <img src={checkSizeIcon(ZapierBigIcon, ZapierSmallIcon)} alt="" className="hero-section__companies-icon" />
                </li>
                <li className="hero-section__companies-item">
                    <img src={checkSizeIcon(SpotifyBigIcon, SpotifySmallIcon)} alt="" className="hero-section__companies-icon" />
                </li>
                <li className="hero-section__companies-item">
                    <img src={checkSizeIcon(ZoomBigIcon, ZoomSmallIcon)} alt="" className="hero-section__companies-icon" />
                </li>
                <li className="hero-section__companies-item">
                    <img src={checkSizeIcon(SlackBigIcon, SlackSmallIcon)} alt="" className="hero-section__companies-icon" />
                </li>
                <li className="hero-section__companies-item">
                    <img src={checkSizeIcon(AmazonBigIcon, AmazonSmallIcon)} alt="" className="hero-section__companies-icon" />
                </li>
                <li className="hero-section__companies-item">
                    <img src={checkSizeIcon(AdobeBigIcon, AdobeSmallIcon)} alt="" className="hero-section__companies-icon" />
                </li>
            </ul>
        </>
    );
};

const HeroSectionDescContent = () => {
    return (
        <>
            <img src={DiagramGreen} alt="" className='hero-section__background'/>
            <h1 className="hero-section__title">
                A Digital Product Studio that will Work
            </h1>
            <div className="hero-section__for">
                For <span className='hero-section__for-block'>Startups</span> , <span className='hero-section__for-block'>Enterprise leaders</span> , <span className='hero-section__for-block'>Media & Publishers</span> and <span className='hero-section__for-block'> Social Good</span> 
            </div>
            <div className="hero-section__our">
                <a href="/" className="hero-section__our-works">our works</a>
                <a href="/" className="hero-section__our-contact">contact us</a>
            </div>
        </>
    );
}

const HeroSection = () => {
    return (
        <section className='hero-section'>
            <div className="container">
                <div className="hero-section__content">

                {
                    document.body.clientWidth > 390 ? HeroSectionDescContent() : <div className='hero-section__content-container'> {HeroSectionDescContent()} </div>
                }
                    
                </div>
                <div className="hero-section__companies">
                    {
                        document.body.clientWidth > 390 ? HeroSectionComponiesContent() : <div className='hero-section__companies-container'> {HeroSectionComponiesContent()} </div>
                    }
                </div>
            </div>
        </section>
    );
};
 
export default HeroSection;