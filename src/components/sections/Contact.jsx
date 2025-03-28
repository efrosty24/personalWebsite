import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";

export const Contact = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Evan Fraustro",
            message: message,
        };


        emailjs
            .send(
                serviceId, 
                templateId, 
                templateParams, 
                publicKey
            )
            .then((response) => {
                console.log("Email sent successfully:", response);
                alert("Message Sent!");
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.error("Email sending failed:", error);
                alert("Oops, something went wrong. Please try again.");
            });
    };

    return (
        <section 
        id="contact"
        className="min-h-screen flex items-center justify-center py-20"
        >
            
                <RevealOnScroll>
                    <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent text-center">
                            Get in Touch
                            </h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="relative">
                                <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5 "
                                placeholder="Name"
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                />
                            </div>
                            <div className="relative">
                                <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5 "
                                placeholder="example@gmail.com"
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                />
                            </div>
                            <div className="relative">
                                <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={message}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5 "
                                placeholder="Your message..."
                                onChange={(e) =>
                                    setMessage(e.target.value)
                                }
                                />
                            </div>
                            <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(59,130,246, 0.4)] hover:cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </RevealOnScroll>
        
        </section>
    )
};