import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import './Theme.scss';
import { useEffect, useState } from 'react';

const Theme = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  
  const setTheme = () => {
  setDarkTheme(!darkTheme)
  }
  
  useEffect(() => {
    if (darkTheme) {
      document.body.style.background = "black"
    }
    else {
      document.body.style.background = 'whitesmoke'; 
    }
  },[darkTheme])

  return (
    <nav className="navbar">
      <button className="navbar__btn" onClick={setTheme}>
        {darkTheme ? (
          <BsFillMoonFill fill="white" className="navbar__icon" />
        ) : (
          <BsFillSunFill className="navbar__icon" />
        )}
      </button>
    </nav>
  );
};

export default Theme;
