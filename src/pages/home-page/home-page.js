import React from "react";
import { Component } from "react";

import Navigation from "../../components/navigation/navigation";
import Footer from '../../components/footer/footer';
// import NameSection from '../../components/name-section/name-section';
// import DescriptionSection from "../../components/description-section/description-section";
// import TodayUxuid from "../../components/today-uxuid/today-uxuid";
import StartProject from "../../components/start-project/start-project";
import FrequentlyAsked from "../../components/frequently-asked/frequently-asked";
import ContactForm from "../../components/contact-form/contact-form";
import HeroSection from "../../components/hero-section/hero-section";


import OurServices from '../../components/home-page-components/our-services/our-services';
import WhyChooseUxuid from "../../components/home-page-components/why-choose-uxuid/why-choose-uxuid";
import ClientAboutUs from "../../components/home-page-components/clients-about-us/clients-about-us";

class  HomePage extends Component {
    render() {
        return (
            <>
                <Navigation />
                <HeroSection />
                <OurServices />
                <WhyChooseUxuid />
                <ClientAboutUs />
                <FrequentlyAsked />
                <StartProject 
                    title='Thank you for your Interest in UXUID.' 
                    text='We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.'    
                />
                <ContactForm />
                <Footer />
            </>
        );
    }
}

export default HomePage;