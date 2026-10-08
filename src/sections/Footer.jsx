import Icon from '../components/Icon';
export default function Footer() {
  return (
    <footer className="site-footer shell">
      <div className="footer-top">
        <a className="wordmark" href="#home" aria-label="Back to top">
          rh<span>.</span>
        </a>
        <p>Thoughtfully built. Always evolving.</p>
        <div className="footer-socials">
          <a
            href="https://github.com/Raiyanhq"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Icon size={14} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mdraiyanhaque/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Icon size={14} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href="https://www.instagram.com/raiyan____hq/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram <Icon size={14} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Raiyan Haque</span>
        <span>REACT · THREE.JS · A LITTLE CURIOSITY</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
