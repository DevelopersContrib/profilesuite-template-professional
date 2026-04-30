import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Home3Footer({ domain, social, profile }) {
  return (
    <footer id="contact" className="home3-footer fade-in-section">
      <div className="home3-container">
        <div className="home3-contact-block">
          <h2 className="home3-section-title home3-contact-title">Contact</h2>
          {profile?.email && (
            <p className="home3-contact-email">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          )}
          <div className="home3-footer-social">
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
        </div>
        <div className="home3-footer-bottom">
          <p className="home3-copyright">
            © {new Date().getFullYear()} {domain}. All rights reserved.
          </p>
          <p className="home3-template-switch">
            <a href="/">Classic</a>
            {" · "}
            <a href="/home2">Alt layout</a>
            {" · "}
            <span>CV layout</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
