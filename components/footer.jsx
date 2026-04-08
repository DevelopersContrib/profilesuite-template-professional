import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer({ domain, social }) {
  return (
    <footer className="footer-modern">
      <div className="container">
        <p className="footer-brand">{domain}</p>

        <div className="mb-3">
          {social.facebook && (
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          )}
          {social.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          )}
          {social.instagram && (
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          )}
          {social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          )}
        </div>

        <hr className="footer-divider" />

        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} {domain}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
