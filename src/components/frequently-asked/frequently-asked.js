import PlusLargeIcon from './icons/pluses/plus-large.svg';
import PlusMediumIcon from './icons/pluses/plus-medium.svg';
import PlusSmallIcon from './icons/pluses/plus-small.svg';

import CrossLargeIcon from './icons/crosses/cross-large.svg';
import CrossMediumIcon from './icons/crosses/cross-medium.svg';
import CrossSmallIcon from './icons/crosses/cross-small.svg';

import './frequently-asked.scss';


function getAccordionDescription(event) {
    const sizePlusIcon = document.body.clientWidth > 1920 ? PlusLargeIcon : 
    document.body.clientWidth < 1920 && document.body.clientWidth > 390 ? PlusMediumIcon : 
    document.body.clientWidth < 390 ? PlusSmallIcon : null;

    const sizeCrossIcon = document.body.clientWidth > 1920 ? CrossLargeIcon : 
    document.body.clientWidth < 1920 && document.body.clientWidth > 390 ? CrossMediumIcon : 
    document.body.clientWidth < 390 ? CrossSmallIcon : null;


    Array.from(document.querySelectorAll('.frequently-asked__panel_active')).map(item => item.classList.remove('frequently-asked__panel_active'));

    Array.from(document.querySelectorAll('.frequently-asked__accordion-number_active')).map(item => item.classList.remove('frequently-asked__accordion-number_active'));

    Array.from(document.querySelectorAll('.frequently-asked__accordion-desc_active')).map(item => item.classList.remove('frequently-asked__accordion-desc_active'));

    Array.from(document.querySelectorAll('.frequently-asked__accordion-icon')).map(item => item.src = sizePlusIcon);

    if(!event.target.closest('.frequently-asked__question').lastElementChild.classList.contains('frequently-asked__panel_active')) {
        event.target.closest('.frequently-asked__question').lastElementChild.classList.add('frequently-asked__panel_active');

        event.target.closest('.frequently-asked__question').firstElementChild.children[0].classList.add('frequently-asked__accordion-desc_active');
        event.target.closest('.frequently-asked__question').firstElementChild.children[1].classList.add('frequently-asked__accordion-desc_active');
        event.target.closest('.frequently-asked__question').firstElementChild.children[2].src = sizeCrossIcon;
    }

}

const FrequentlyAsked = () => {
    const sizePlusIcon = document.body.clientWidth > 1920 ? PlusLargeIcon : 
    document.body.clientWidth < 1920 && document.body.clientWidth > 390 ? PlusMediumIcon : 
    document.body.clientWidth < 390 ? PlusSmallIcon : null;

    return (
        <section className="frequently-asked">
            <div className="container">
                <div className="frequently-asked__content">
                    <h3 className="frequently-asked__title">
                        Frequently Asked Questions
                    </h3>
                    <p className="frequently-asked__text">
                        Still you have any questions? Contact our Team via hello@uxuid.ru
                    </p>
                </div>

                <div className="frequently-asked__info">
                    <div className="frequently-asked__info-col">
                        <div className="frequently-asked__question">
                            <button className="frequently-asked__accordion" onClick={(event) => getAccordionDescription(event)}>
                                <div className="frequently-asked__accordion-number">01</div>
                                <div className="frequently-asked__accordion-desc">
                                    What services does UXUID provide?
                                </div>
                                <img src={sizePlusIcon} alt="Plus icon" className="frequently-asked__accordion-icon" />
                            </button>
                            <div className="frequently-asked__panel">
                                <p className="frequently-asked__panel-text">
                                    UXUID offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.
                                </p>
                            </div>
                        </div>
                        <div className="frequently-asked__question">
                            <button className="frequently-asked__accordion" onClick={(event) => getAccordionDescription(event)}>
                                <div className="frequently-asked__accordion-number">02</div>
                                <div className="frequently-asked__accordion-desc">
                                    How can UXUID help my business?
                                </div>
                                <img src={sizePlusIcon} alt="Plus icon" className="frequently-asked__accordion-icon" />
                            </button>
                            <div className="frequently-asked__panel">
                                <p className="frequently-asked__panel-text">
                                    UXUID offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.
                                </p>
                            </div>
                        </div>
                        <div className="frequently-asked__question">
                            <button className="frequently-asked__accordion" onClick={(event) => getAccordionDescription(event)}>
                                <div className="frequently-asked__accordion-number">03</div>
                                <div className="frequently-asked__accordion-desc">
                                    What industries does UXUID work with?
                                </div>
                                <img src={sizePlusIcon} alt="Plus icon" className="frequently-asked__accordion-icon" />
                            </button>
                            <div className="frequently-asked__panel">
                                <p className="frequently-asked__panel-text">
                                    UXUID offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.
                                </p>
                            </div>
                        </div>
                        <div className="frequently-asked__question">
                            <button className="frequently-asked__accordion" onClick={(event) => getAccordionDescription(event)}>
                                <div className="frequently-asked__accordion-number">04</div>
                                <div className="frequently-asked__accordion-desc">
                                    How long does it take to complete a project with UXUID?
                                </div>
                                <img src={sizePlusIcon} alt="Plus icon" className="frequently-asked__accordion-icon" />
                            </button>
                            <div className="frequently-asked__panel">
                                <p className="frequently-asked__panel-text">
                                    UXUID offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="frequently-asked__info-col">
                        <div className="frequently-asked__question">
                            <button className="frequently-asked__accordion" onClick={(event) => getAccordionDescription(event)}>
                                <div className="frequently-asked__accordion-number">05</div>
                                <div className="frequently-asked__accordion-desc">
                                    Do you offer ongoing support and maintenance after the project is completed?
                                </div>
                                <img src={sizePlusIcon} alt="Plus icon" className="frequently-asked__accordion-icon" />
                            </button>
                            <div className="frequently-asked__panel">
                                <p className="frequently-asked__panel-text">
                                    UXUID offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.
                                </p>
                            </div>
                        </div>
                        <div className="frequently-asked__question">
                            <button className="frequently-asked__accordion" onClick={(event) => getAccordionDescription(event)}>
                                <div className="frequently-asked__accordion-number">06</div>
                                <div className="frequently-asked__accordion-desc">
                                    Can you work with existing design or development frameworks?
                                </div>
                                <img src={sizePlusIcon} alt="Plus icon" className="frequently-asked__accordion-icon" />
                            </button>
                            <div className="frequently-asked__panel">
                                <p className="frequently-asked__panel-text">
                                    UXUID offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.
                                </p>
                            </div>
                        </div>
                        <div className="frequently-asked__question">
                            <button className="frequently-asked__accordion" onClick={(event) => getAccordionDescription(event)}>
                                <div className="frequently-asked__accordion-number">07</div>
                                <div className="frequently-asked__accordion-desc">
                                    How involved will I be in the project development process?
                                </div>
                                <img src={sizePlusIcon} alt="Plus icon" className="frequently-asked__accordion-icon" />
                            </button>
                            <div className="frequently-asked__panel">
                                <p className="frequently-asked__panel-text">
                                    UXUID offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.
                                </p>
                            </div>
                        </div>
                        <div className="frequently-asked__question">
                            <button className="frequently-asked__accordion" onClick={(event) => getAccordionDescription(event)}>
                                <div className="frequently-asked__accordion-number">08</div>
                                <div className="frequently-asked__accordion-desc">
                                    Can you help with website or app maintenance and updates?
                                </div>
                                <img src={sizePlusIcon} alt="Plus icon" className="frequently-asked__accordion-icon" />
                            </button>
                            <div className="frequently-asked__panel">
                                <p className="frequently-asked__panel-text">
                                    UXUID offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrequentlyAsked;