import Title from "../Layouts/Title";
import ContactForm from "./ContactForm";
import ContactLeft from "./ContactLeft";

const Contact = () => {

    return (
        <section
            id="contact"
            className="w-full py-20 border-b-[1px] border-b-black">
            <Title title="Contact Now" desc="Contact Now with me" />
            <div className="full">
                <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">

                    <ContactLeft></ContactLeft>

                    {/* Contact Form  */}
                    <ContactForm></ContactForm>
                </div>

            </div>


        </section>
    );
};

export default Contact;