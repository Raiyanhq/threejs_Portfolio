import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactEmail } from '../constants';
import Icon from '../components/Icon';
const initialForm = { name: '', email: '', message: '', website: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const sending = useRef(false);
  const handleChange = (event) => {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
    if (status !== 'sending') setStatus('idle');
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sending.current || form.website) return;
    if (!form.name.trim() || !form.message.trim()) {
      setStatus('invalid');
      return;
    }
    sending.current = true;
    setStatus('sending');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_jdzg4qk',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_19f2v0b',
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          reply_to: form.email.trim(),
          to_name: 'Raiyan Haque',
          to_email: contactEmail,
          message: form.message.trim(),
        },
        {
          publicKey:
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'BxEHZornkqg0YUpuy',
        },
      );
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    } finally {
      sending.current = false;
    }
  };
  return (
    <section id="contact" className="section contact-section shell">
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">
            <span>04 /</span> YOUR NEXT IDEA STARTS HERE
          </p>
          <h2>
            Let’s build
            <br />
            something <span>good.</span>
          </h2>
          <p>
            Have an opportunity, an interesting problem, or an idea worth
            exploring? I’d love to hear about it.
          </p>
          <a className="contact-direct" href={`mailto:${contactEmail}`}>
            {contactEmail}
            <Icon />
          </a>
          <div className="contact-note">
            <span className="status-dot" />
            <span>Based in Atlanta. Open to possibilities.</span>
          </div>
        </div>
        <form
          className="contact-form panel"
          onSubmit={handleSubmit}
          aria-label="Contact Raiyan"
          aria-busy={status === 'sending'}
        >
          <div className="form-top">
            <span className="card-kicker">DROP ME A NOTE</span>
            <Icon name="mail" />
          </div>
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Alex Morgan"
            value={form.name}
            onChange={handleChange}
            disabled={status === 'sending'}
          />
          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="alex@company.com"
            value={form.email}
            onChange={handleChange}
            disabled={status === 'sending'}
          />
          <label htmlFor="contact-message">What’s on your mind?</label>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={4}
            placeholder="Tell me a little about your idea or opportunity…"
            value={form.message}
            onChange={handleChange}
            disabled={status === 'sending'}
          />
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="contact-website">Leave this field empty</label>
            <input
              id="contact-website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={handleChange}
            />
          </div>
          <button
            className="button button-primary"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending your message…' : 'Send message'}
            <Icon name={status === 'success' ? 'check' : 'arrow'} />
          </button>
          <div
            className={`form-status status-${status}`}
            role="status"
            aria-live="polite"
          >
            {status === 'success' &&
              'Thanks for reaching out! Your message was sent.'}
            {status === 'error' && (
              <>
                The message couldn’t be sent. Please try again or{' '}
                <a href={`mailto:${contactEmail}`}>email me directly</a>.
              </>
            )}
            {status === 'invalid' && 'Please add your name and a message.'}
            {status === 'idle' &&
              'Prefer email? You can always reach me directly.'}
          </div>
        </form>
      </div>
    </section>
  );
}
