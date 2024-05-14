
import './contact-form.scss';

const ContactForm = () => {
    return (
        <section className="contact-form">
            <div className="container">
                <form action="" method="post" className="form">
                    <div className="form__divide">
                        <div className="form__box">
                            <div className="form__box-title">
                                Full Name
                            </div>
                            <input type="text" name="full-name" id="" className="form__box-input" placeholder='Type here' />
                        </div>

                        <div className="form__box">
                            <div className="form__box-title">
                                Email
                            </div>
                            <input type="text" name="email" id="" className="form__box-input" placeholder='Type here' />
                        </div>
                    </div>

                    <div className="form__contact">
                        <div className="form__contact-container">
                            <div className="form__contact-title">
                                Why are you contacting us?
                            </div>
                            <div className="form__checkboxes">
                                <div className="form__checkboxes-col">
                                    <div className="form__checkboxes-row">
                                        <input type="checkbox" name="web-design" id="web-design" className="form__checkboxes-checkbox" />
                                        <label htmlFor="web-design" className="form__checkboxes-label">Web Design</label>
                                    </div>
                                    <div className="form__checkboxes-row">
                                        <input type="checkbox" name="mobile-app-design" id="mobile-app-design" className="form__checkboxes-checkbox" />
                                        <label htmlFor="mobile-app-design" className="form__checkboxes-label">Mobile App Design</label>
                                    </div>
                                </div>
                                <div className="form__checkboxes-col">
                                    <div className="form__checkboxes-row">
                                        <input type="checkbox" name="collaboration" id="collaboration" className="form__checkboxes-checkbox" />
                                        <label htmlFor="collaboration" className="form__checkboxes-label">Collaboration</label>
                                    </div>
                                    <div className="form__checkboxes-row">
                                        <input type="checkbox" name="others" id="others" className="form__checkboxes-checkbox" />
                                        <label htmlFor="others" className="form__checkboxes-label">Others</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form__budget">
                        <div className="form__budget-container">
                            <div className="form__budget-title">
                                Your Budget
                            </div>
                            <div className="form__budget-desc">
                                Slide to indicate your budget range
                            </div>
                            <div className="form__budget-indicate">
                                <input type="range" name="range" id="" className="form__budget-range" />
                            </div>
                        </div>
                    </div>

                    <div className="form__message">
                        <div className="form__message-container">
                            <div className="form__message-title">
                                Your Message
                            </div>
                            <textarea name="" id="" className="form__message-area" placeholder='Type here'></textarea>
                            <div className="form__message-underline"></div>
                        </div>
                    </div>

                    <div className='form__submit'>
                        <button type="submit" className="form__submit-button"
                        onClick={e => e.preventDefault()}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}



export default ContactForm;