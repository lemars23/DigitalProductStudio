
import React from "react";
import { Component } from "react";

import Navigation from "../../components/navigation/navigation";
import Footer from '../../components/footer/footer';
import NameSection from '../../components/name-section/name-section';
import TodayUxuid from "../../components/today-uxuid/today-uxuid";
import FrequentlyAsked from "../../components/frequently-asked/frequently-asked";
import ContactForm from "../../components/contact-form/contact-form";
import ContactPageComponents from "../../components/contact-page-components/contact-page-components";

class  ContactPage extends Component {
    render() {
        return (
            <>
                <Navigation />
                <NameSection 
                    title='Contact Us' 
                    subtitle='Get in touch with us today and let us help you with any questions or inquiries you may have.' 
                    backgroundImageNumber='fiveth'
                />
                <ContactPageComponents />
                <ContactForm />
                <FrequentlyAsked />
                <TodayUxuid />
                <Footer />
            </>
        );
    }
}

export default ContactPage;