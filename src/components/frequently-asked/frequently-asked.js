import PlusIcon from './icons/pluses/plus-large.svg';
import CrossIcon from './icons/crosses/cross-large.svg';

import './frequently-asked.scss';

function getAccordionDescription(event) {

    Array.from(document.querySelectorAll('.frequently-asked__panel_active')).map(item => item.classList.remove('frequently-asked__panel_active'));

    Array.from(document.querySelectorAll('.frequently-asked__accordion-number_active')).map(item => item.classList.remove('frequently-asked__accordion-number_active'));

    Array.from(document.querySelectorAll('.frequently-asked__accordion-desc_active')).map(item => item.classList.remove('frequently-asked__accordion-desc_active'));

    Array.from(document.querySelectorAll('.frequently-asked__accordion-icon')).map(item => item.src = PlusIcon);

    if(!event.target.closest('.frequently-asked__question').lastElementChild.classList.contains('frequently-asked__panel_active')) {
        event.target.closest('.frequently-asked__question').lastElementChild.classList.add('frequently-asked__panel_active');

        event.target.closest('.frequently-asked__question').firstElementChild.children[0].classList.add('frequently-asked__accordion-desc_active');
        event.target.closest('.frequently-asked__question').firstElementChild.children[1].classList.add('frequently-asked__accordion-desc_active');
        event.target.closest('.frequently-asked__question').firstElementChild.children[2].src = CrossIcon;
    }

}

const FrequentlyAsked = () => {

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
                                <img src={PlusIcon} alt="Plus icon" className="frequently-asked__accordion-icon" />
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
                                <img src={PlusIcon} alt="Plus icon" className="frequently-asked__accordion-icon" />
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
                                <img src={PlusIcon} alt="Plus icon" className="frequently-asked__accordion-icon" />
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
                                <img src={PlusIcon} alt="Plus icon" className="frequently-asked__accordion-icon" />
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
                                <img src={PlusIcon} alt="Plus icon" className="frequently-asked__accordion-icon" />
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
                                <img src={PlusIcon} alt="Plus icon" className="frequently-asked__accordion-icon" />
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
                                <img src={PlusIcon} alt="Plus icon" className="frequently-asked__accordion-icon" />
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
                                <img src={PlusIcon} alt="Plus icon" className="frequently-asked__accordion-icon" />
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