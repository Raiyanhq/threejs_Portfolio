import { lazy, useEffect, useRef, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import SceneBoundary from '../components/SceneBoundary';
import Icon from '../components/Icon';
import { contactEmail } from '../constants';
import Toolkit from '../components/Toolkit';
import Education from '../components/Education';
const GlobeScene = lazy(() => import('../components/GlobeScene'));
export default function About() {
  const [copyStatus, setCopyStatus] = useState('');
  const timeout = useRef();
  useEffect(() => () => clearTimeout(timeout.current), []);
  const copyEmail = async () => {
    clearTimeout(timeout.current);
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopyStatus('Email copied!');
    } catch {
      setCopyStatus('Copy unavailable. Use the email link.');
    }
    timeout.current = setTimeout(() => setCopyStatus(''), 3500);
  };
  return (
    <section id="about" className="section shell">
      <SectionHeading
        number="01"
        eyebrow="THE PERSON BEHIND THE CODE"
        title={
          <>
            Curiosity, put to work<span className="accent">.</span>
          </>
        }
        description="I like understanding how things work. I like building what comes next even more."
      />
      <div className="about-grid">
        <article className="panel about-intro">
          <span className="card-kicker">A LITTLE ABOUT ME</span>
          <div className="about-monogram" aria-hidden="true">
            rh<span>.</span>
            <div className="monogram-orbit" />
          </div>
          <h3>
            Engineer by practice.
            <br />
            Problem solver by nature.
          </h3>
          <p>
            I’m Raiyan Haque, a computer science student at Georgia State
            University. I build across full-stack development, cloud
            infrastructure, and applied AI—with a focus on making useful things
            work reliably.
          </p>
          <Education />
        </article>
        <Toolkit />
        <article className="panel about-location">
          <div className="card-top">
            <span className="card-kicker">BASED IN ATLANTA</span>
            <span className="status-dot" />
          </div>
          <SceneBoundary
            className="globe-scene"
            label="Interactive globe centered on Atlanta"
          >
            {(visible) => <GlobeScene visible={visible} />}
          </SceneBoundary>
          <div className="location-copy">
            <h3>
              Here in Atlanta.
              <br />
              Thinking beyond it.
            </h3>
            <p>
              Open to remote opportunities and on-site roles across the United
              States.
            </p>
            <a className="text-link" href="#contact">
              Let’s connect <Icon />
            </a>
          </div>
        </article>
        <article className="panel about-approach">
          <div>
            <span className="card-kicker">HOW I THINK</span>
            <h3>
              Good software is more
              <br />
              than working code.
            </h3>
            <p>
              It’s the details: clear interfaces, reliable systems, and a better
              experience for the person on the other side.
            </p>
          </div>
          <div className="principles">
            <span>
              <i>01</i> Understand the problem
            </span>
            <span>
              <i>02</i> Build with intention
            </span>
            <span>
              <i>03</i> Test, learn, improve
            </span>
          </div>
        </article>
        <article className="panel about-email">
          <Icon name="mail" size={28} />
          <span className="card-kicker">START A CONVERSATION</span>
          <a className="email-link" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          <button className="copy-button" onClick={copyEmail}>
            <Icon
              name={copyStatus === 'Email copied!' ? 'check' : 'copy'}
              size={16}
            />
            Copy email address
          </button>
          <span className="copy-status" role="status">
            {copyStatus}
          </span>
        </article>
      </div>
    </section>
  );
}
