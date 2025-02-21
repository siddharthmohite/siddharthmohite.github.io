import SendEmailIcon from "../icons/SendEmailIcon"
import { useState ,useRef } from "react";
import "../styles/SendAMessage.scss";

export default function SendAMessage({onClose}){

const [isExpanded, setIsExpanded] = useState(false);
const formRef = useRef(null); 
const [status, setStatus] = useState(null); // Store response message
const [loading, setLoading] =useState(false);
const [formData, setFormData] = useState({
    from: "",
    subject: "",
    message: "",
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default page reload
    setLoading(true);
    const data = new FormData();
    data.append("from", formData.from);
    data.append("subject", formData.subject);
    data.append("message", formData.message);

    try {
        const response = await fetch("https://formsubmit.co/ajax/siddharthjmohite@gmail.com", {
            method: "POST",
            body: data,
        });

        const result = await response.json();

        if (result.success) {
            setStatus({ type: "success", message: "Message sent successfully!" });
            setFormData({ from: "", subject: "", message: "" }); // Clear form after submission
        } else {
            setStatus({ type: "error", message: "Failed to send message. Try again!" });
        }
    } catch (error) {
        setStatus({ type: "error", message: "An error occurred. Please try again later." });
    }

    setLoading(false);
};
const handleButtonClose = () =>
    {
        onClose();
    };    

    return (
       <div className="mail-container">
            <div className="mail-topbar">
                <div className="buttons-container">
                    <button 
                    onClick={handleButtonClose}
                    className="button-close">

                    </button>
                    <button className={`button-min ${isExpanded ? 'active' : ''}`}>
                        
                    </button>
                    <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="button-max">
                        
                    </button>
                </div>   
                    <button onClick={handleSubmit} title="Send" className="send-email">
                    {loading ? <div className="spinner"></div> : <SendEmailIcon />}
                    </button>  
                    {status && (
                <div className={`response-message ${status.type}`}>
                    {status.message}
                </div>
            )} 
            </div>
            <div className="mail-sender-content">
                <div className="input-container">
                    <label htmlFor="to">From:</label>
                    <input type="email" id="to" name="from" value={formData.from} onChange={handleChange} placeholder="" required />
                </div> 

                <div className="input-container-1">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="" required />
                </div>

                <div className="input-container-2">
                    <label htmlFor="message">Message:</label>
                    <input type="text" id="message" name="message" value={formData.message} onChange={handleChange} placeholder="" required />
                </div>
            </div>
       </div>
    )
}