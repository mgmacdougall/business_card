import {CiTwitter} from 'react-icons/ci';
import {AiOutlineFacebook} from 'react-icons/ai';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <span>
        <CiTwitter size={'2em'} />
      </span>
      <span>
        <AiOutlineFacebook size={'2em'} />
      </span>
      <span>Here</span>
    </div>
  );
}

export default Footer;
