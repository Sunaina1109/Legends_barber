import React from "react";
import Hero from "./home/Hero";
import Index from "./home/Index";
import Services from "./home/Services";
import About from "./home/About";
import Gallery from "./home/Gallery";
import Follow from "./home/Follow";
import PopupForm from "./appointment/PopupForm";
import AppointmentForm from "./appointment/AppointmentForm";

function App() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Index />
            <Gallery />
            <Follow />
            <PopupForm />
            <AppointmentForm />
        </>
    );
}

export default App;
