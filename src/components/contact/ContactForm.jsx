import { useState } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const ContactForm = () => {

    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [loading, setLoading] = useState(false);


    const handaleMessage = async (e) => {


        e.preventDefault();
        const usersInfo = {
            userName,
            phoneNumber,
            email,
            subject,
            message
        }
        setLoading(true);
        console.log(usersInfo);


        if (userName === "") {
            setError("User Name is Required")
        }
        else if (phoneNumber === "") {
            setError("Phone Number is Required")
        }
        else if (email === "") {
            setError("Email is Required")
        }
        else if (subject === "") {
            setError("Subject is Required")
        }
        else if (message === "") {
            setError("Message is Required")
        }
        else {
            emailjs
                .send('service_te8qdsb', 'template_kmvpaqw', usersInfo, {
                    publicKey: 'uKMB-jmD6Jg4qA_SG',
                })
                .then(
                    () => {
                        setSuccess(`Success!! Thank you ${userName}`);
                        Swal.fire({
                            title: `Thank You ${userName} I will get back to you as soon as possible..`,
                            showClass: {
                                popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                            },
                            hideClass: {
                                popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                            }
                        });
                        setLoading(false)
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );

            setError("");
            setUserName("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");

        }
    }

    return (
        <div className="w-full lgl:w-[60%] flex flex-col gap-5 h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-ahadowOne">
            <form onSubmit={handaleMessage} className="w-full flex flex-col gap-5">
                {
                    error ? <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-ahadowOne text-center text-red-400 text-base tracking-wide animate-bounce ">{error}</p>
                        : <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-ahadowOne text-center text-green-400 text-base tracking-wide animate-bounce ">{success}</p>

                }
                <div className="lgl:flex-row flex flex-col gap-6">
                    <div className="w-full lgl:w-1/2 flex flex-col gap-3">
                        <p className="text-sm text-gray-400 uppercase tracking-wide">
                            Your Name
                        </p>
                        <input
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                            className={`${error === "User Name is Required" && "outline-designColor"} contactInput`}
                            type="text"

                        />
                    </div>
                    <div className="w-full lgl:w-1/2 flex flex-col gap-3">
                        <p className="text-sm text-gray-400 uppercase tracking-wide">
                            Phone Number
                        </p>
                        <input
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                            className={`${error === "Phone Number is Required" && "outline-designColor"} contactInput`}
                            type="" />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Your Email
                    </p>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className={`${error === "Email is Required" && "outline-designColor"} contactInput`}
                        type="email" />
                </div>
                <div className="w-full flex flex-col gap-3">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Subject
                    </p>
                    <input
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                        className={`${error === "Subject is Required" && "outline-designColor"} contactInput`}
                        type="text" />
                </div>
                <div className="w-full flex flex-col gap-3">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Your Message
                    </p>
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className={`${error === "Message is Required" && "outline-designColor"} contactInput h-32`} />
                </div>
                <div>
                    <button type="submit" className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-2 hover:border-designColor border-transparent">
                        Send Message
                    </button>
                </div>
                <div className="mt-4">
                    {
                        error ? <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-ahadowOne text-center text-red-400 text-base tracking-wide animate-bounce ">{error}</p>
                            : <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-ahadowOne text-center text-green-400 text-base tracking-wide animate-bounce ">{success}</p>

                    }
                </div>

            </form>
        </div>
    );
};

export default ContactForm;