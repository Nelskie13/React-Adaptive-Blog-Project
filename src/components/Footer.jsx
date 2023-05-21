import socialogo from "../assets/Social network.svg";

function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <div className="follow-us">
          <p className="follow">Follow Us</p>
          <img className="socialogo" src={socialogo} alt="social network" />
        </div>
        <div className="legality">
          <p className="legal">Privacy Policy • Terms of Use</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
