import {AiOutlineMail,AiFillLinkedin} from 'react-icons/ai'


import './Header.css';
import myImage from '../assets/sample_photo.png';
function Header() {
  return (
    <>
    <div className="img-container ">
      <img src={myImage} />
    </div>
    <div className='header-container'>
        <h1>Michael MacDougall</h1>
        <h2>Frontend Developer</h2>
        <h4>Portfolio</h4>
      </div>
      <div className='btn-strip'>
        <a className="btn" href="#" target="_blank" rel="noopener noreferrer"><AiOutlineMail/>Email</a>
        <a className="btn" href="#" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/>LinkedIn</a>
        </div>
    </>
  );
}

export default Header;
