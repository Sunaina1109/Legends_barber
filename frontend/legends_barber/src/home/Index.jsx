import React, { useState, useEffect } from "react";
import "../App.css";

function Index() {
    const [customers, setCustomers] = useState(1); // Starts at 1, increases infinitely
    const [services, setServices] = useState(1); // Starts at 1, stops at 20
    const [stores, setStores] = useState(1); // Starts at 1, stops at 3

    useEffect(() => {
        // Customers count - Increases forever
        const customerInterval = setInterval(() => {
            setCustomers((prev) => (prev < 5000 ? prev + 1 : 5000)); // Stops at 20
        }, 50); // Speed: 1 increase every 100ms

        // Services count - Stops at 20
        const servicesInterval = setInterval(() => {
            setServices((prev) => (prev < 40 ? prev + 1 : 40)); // Stops at 20
        }, 500); // Speed: 1 increase every 150ms

        // Stores count - Stops at 3
        const storesInterval = setInterval(() => {
            setStores((prev) => (prev < 3 ? prev + 1 : 3)); // Stops at 3
        }, 2000); // Speed: 1 increase every 1000ms

        return () => {
            clearInterval(customerInterval);
            clearInterval(servicesInterval);
            clearInterval(storesInterval);
        };
    }, []);

    return (
        <div className="index">
            <div className="index-item">
                <div>
                    <h3>{customers}+</h3>
                    <p>Satisfied Customers</p>
                </div>
                <div>
                    <h3>{services}+</h3>
                    <p>Services</p>
                </div>
                <div>
                    <h3>{stores}</h3>
                    <p>Stores</p>
                </div>
            </div>
        </div>
    );
}

export default Index;
