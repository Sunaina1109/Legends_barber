import { useModal } from "../context/ModalContext";

const PopupForm = () => {
    const { openModal } = useModal();

    return (
        <button onClick={openModal} className="open-popup-btn">
            Open Appointment Form
        </button>
    );
};

export default PopupForm;
