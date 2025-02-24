import React, { useState } from "react";
import Modal from "react-modal";
import PhoneInput from "react-phone-input-2";
import { useModal } from "../context/ModalContext";
import emailjs from "emailjs-com"; 
import "../App.css"; // Import CSS styles

Modal.setAppElement("#root");

const AppointmentForm = () => {
    const { isModalOpen, closeModal } = useModal();

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        store: "",
        gender: "",
        services: [],
        date: "",
        time: "",
    });

    const [showServices, setShowServices] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    const stores = ["Porto Salon", "Matosinhos Salon", "Aveiro Salon"];

    const servicesForGender = {  
        Female: { 
            "Hair Services": [ "Head Wash", "Head Wash & Brushing", "Head Massage (25 min)", "Hair Spa",
                "Basic Hair Cut", "Layers Hair Cut", "Step Hair Cut", "Blow Dryer",
                "Head Wash & Blow Dryer", "Highlights", "Highlight Chunks",
                "Temporary Hair Ironing", "Temporary Hair Rolls", "Roots Touch-up",
                "Hair Colour", "Keratin Treatment", "Hair Polishing", "Rebounding/Smoothing"],
            "Skin Care Services": ["Clean Up", "Clean Up (With Steam)", "Only Scrub", "Only D-Tan",
                "Only Gel Massage", "D-Tan Facial", "Facial", "Acne Treatment"],
                "Nail Art Service": [
                    "New Gel Extension", "Gel Extension Maintenance", "Take Off Gel Extension",
                    "One Nail Repair", "Take Off Gel Nail Polish", "Capsule Nail Extension with Glue",
                    "Manicure", "Manicure With Normal Nail Polish", "Manicure With Gel Nail Polish",
                    "Nail Polish", "Gel Nail Polish", "Additional French Colour", "Nail Art for One Nail",
                    "Threading & Colouring"
                ],
                "Pedicure Services": [
                    "Pedicure", "Nail Polish", "Gel Nail Polish", "Pedicure With Nail Polish", "Foot Massage (20 min)" ]    
        },
        Male: { 
            "Hair Services": [
                "Basic Hair Cut", "Hair Cut", "Beard Cut", "Clean Shave", "Baby Hair Cut",
                "Head Wash & Styling", "Braids & Dreadlocks", "Hair Curl", "Face Wax",
                "Head Massage (30 min)", "Highlights", "Highlights Fashion Shades",
                "White Hair Colour", "Rebounding/Smoothing", "Men’s Hair Colour",
                "Hair Colour & Polishing", "Threading"
            ],
            "Skin Care Services": [
                "Clean Up", "Clean Up (With Steam)", "Only Scrub", "Only D-Tan",
                "Only Gel Massage", "D-Tan Facial", "Facial", "Acne Treatment"
            ],
            "Hand & Foot Care": [
                "Manicure", "Pedicure", "Full Arms Wax", "Full Legs Wax",
                "Foot Massage (20 min)", "Hand Massage (10 min)"
            ]
        }
    };

    const getServicesForStore = (store, gender) => {
        if (!gender) return {};
        let availableServices = { ...servicesForGender[gender] };
        if (store === "Aveiro Salon") {
            delete availableServices["Nail Art Service"];
        }
        return availableServices;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setShowWarning(false);
        if (name === "store" || name === "gender" || name === "date" || name === "time") setShowServices(false);
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, number: value });
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

    const handleServiceClick = () => {
        if (!formData.store || !formData.gender || !formData.date || !formData.time) {
            setShowWarning(true);
        } else {
            setShowServices(!showServices);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.name || !formData.number || !formData.email || !formData.store || !formData.gender || !formData.date || !formData.time) {
            alert("Please fill all required fields!");
            return;
        }

        const templateParams = {
            name: formData.name,
            number: formData.number,
            email: formData.email,
            store: formData.store,
            gender: formData.gender,
            services: formData.services.join(", "),
            date: formData.date,
            time: formData.time,
        };

        emailjs.send(
            "service_j8e6hfs",  // EmailJS Service ID
            "template_2rwdjj5",  // EmailJS Template ID
            templateParams,
            "wOM3XHkB20x_uT7eG"    // EmailJS Public Key
        )
        .then((response) => {
            alert("Your request was successfully submitted. We will contact you soon!");
            setFormData({ name: "", number: "", email: "", store: "", gender: "", services: [], date: "", time: "" });
            closeModal();
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("Failed to send the email. Please try again.");
        });
    };

    return (
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal-content" overlayClassName="modal-overlay">
            <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                    </label>

                    <label>
                        <PhoneInput
                            country={"pt"}
                            value={formData.number}
                            onChange={handlePhoneChange}
                            inputProps={{ name: "number", required: true }}
                        />
                    </label>
                </div>

                <label style={{marginBottom:'15px'}} >
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
                </label>

                <div className="form-row">
                    <label>
                        <select name="store" value={formData.store} onChange={handleChange} required>
                            <option value="" disabled>Select a store</option>
                            {stores.map((store) => (
                                <option key={store} value={store}>{store}</option>
                            ))}
                        </select>
                    </label>

                    <label>
                        <select name="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="" disabled>Select Gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </select>
                    </label>
                </div>

                <div className="form-row">
                    <label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                    </label>

                    <label>
                        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                    </label>
                </div>

                {showWarning && <p className="warning-text">Please select store, gender, date, and time first.</p>}

                <label>
                    <div className="service-dropdown" onClick={handleServiceClick} style={{ cursor: 'pointer' }}>
                        {formData.services.length === 0 ? "Select a Service" : formData.services.join(", ")}
                    </div>
                </label>

                {showServices && (
                    <div className="dropdown-container">
                        {Object.entries(getServicesForStore(formData.store, formData.gender)).map(([category, services]) => (
                            <div key={category}>
                                <h3>{category}</h3>
                                {services.map((service) => (
                                    <label key={service}>
                                        <input type="checkbox" value={service} checked={formData.services.includes(service)} onChange={handleServiceChange} />
                                        {service}
                                    </label>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                <button type="submit">Submit</button>               
            </form>
        </Modal>
    );
};

export default AppointmentForm;
