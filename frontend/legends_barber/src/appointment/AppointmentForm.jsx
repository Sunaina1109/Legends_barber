import React, { useState } from "react";
import Modal from "react-modal";
import { useModal } from "../context/ModalContext";
import "../App.css"; // Import CSS styles

Modal.setAppElement("#root");

const AppointmentForm = () => {
    const { isModalOpen, closeModal } = useModal();
    
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        store: "",
        services: [],
    });

    const [showServices, setShowServices] = useState(false);

    const stores = ["Store A", "Store B", "Store C"];
    const allServices = [
        "Service 1", "Service 2", "Service 3", "Service 4", "Service 5",
        "Service 6", "Service 7", "Service 8", "Service 9", "Service 10"
    ];

    const getServicesForStore = (store) => {
        if (store === "Store A") return allServices.slice(0, 5);
        if (store === "Store B") return allServices.slice(0, 7);
        return allServices;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === "store") setShowServices(false);
    };

    const handleServiceChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            services: checked
                ? [...prevState.services, value]
                : prevState.services.filter((service) => service !== value),
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setFormData({ name: "", number: "", email: "", store: "", services: [] });
                closeModal(); 
            }
        } catch (error) {
            console.error("An error occurred.");
        }
    };

    return (
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal-content" overlayClassName="modal-overlay">
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Number:
                    <input type="text" name="number" value={formData.number} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>

                {/* Store Selection Dropdown */}
                <div className="group">
                <label>
                    Store:
                    <select name="store" value={formData.store} onChange={handleChange} required>
                        <option value="" disabled>Select a store</option>
                        {stores.map((store) => (
                            <option key={store} value={store}>{store}</option>
                        ))}
                    </select>
                </label>

                {/* Services Section - Always Visible, Dropdown Hidden Initially */}
                <label>
                    <div className="service-dropdown" onClick={() => setShowServices(!showServices)}>
                        {formData.services.length === 0 ? "Select a Service" : formData.services.join(", ")}
                    </div>
                </label>

                {/* Services Dropdown - Hidden Initially */}
                {showServices && formData.store && (
                    <div className="dropdown-container">
                        {getServicesForStore(formData.store).map((service) => (
                            <label key={service} className="checkbox-label">
                                <input
                                    type="checkbox"
                                    value={service}
                                    checked={formData.services.includes(service)}
                                    onChange={handleServiceChange}
                                />
                                {service}
                            </label>
                        ))}
                    </div>
                )}
                </div>
               <div className="group">
                <button type="submit">Submit</button>
                <button type="button" className="close-button" onClick={closeModal}>
                    Close
                </button>
                </div>
            </form>
        </Modal>
    );
};

export default AppointmentForm;
