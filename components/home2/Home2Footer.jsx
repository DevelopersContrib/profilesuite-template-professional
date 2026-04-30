import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Home2Footer({ domain, social }) {
  return (
    <footer id="contact" className="home2-footer fade-in-section">
      <div className="home2-footer-inner">
        <p className="home2-footer-brand">{domain}</p>
        <div className="home2-footer-social">
          {social.facebook && (
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          )}
          {social.instagram && (
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          )}
        </div>
        <p className="home2-footer-note">
          &copy; {new Date().getFullYear()} {domain}. All rights reserved.
        </p>
        <p className="home2-footer-layout">
          <a href="/">Classic layout</a>
          {" · "}
          <span>Stratos-style view</span>
          {" · "}
          <a href="/home3">CV layout</a>
        </p>
      </div>
    </footer>
  );
}
