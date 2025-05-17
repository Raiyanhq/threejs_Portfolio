import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value })
    }
        // service_jdzg4qk
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                'service_jdzg4qk',
                'template_19f2v0b',
                {
                    from_name: form.name,
                    to_name: 'Raiyan Haque',
                    from_email: form.email,
                    to_email: 'raiyanhaque7@gmail',
                    message: form.message,
                },
                'BxEHZornkqg0YUpuy'
                )
            setLoading(false);
            alert('Thank you, Your message has been sent. I will get back to you as soon as possible!')
            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch(error) {
            setLoading(false);

            console.log(error);

            alert('Something went wrong, please try again!');
        }
    }
    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />

                <div className="contact-container">
                    <h3 className="head-text">Let's Chat!</h3>
                    <p className="text-lg text-white-600 mt-3">I'm always open to new opportunities. Feel free to reach out to me! </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3 ">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Raiyan Haque"
                            />
                        </label>
                        <label className="space-y-3 ">
                        <span className="field-label">Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="rayy001@example.com"
                        />
                    </label>
                        <label className="space-y-3 ">
                        <span className="field-label">Your Message</span>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="field-input"
                            placeholder="Hey I want to give you a job..."
                        />
                    </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />

                        </button>

                    </form>

                </div>


            </div>

        </section>
    )
}
export default Contact
