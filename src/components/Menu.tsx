import { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <nav>
        <a href="index.html" className="logo">Do Brazil</a>
      </nav>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" checked={isChecked} onChange={handleCheckboxChange} />
        <div className="hamburger" onClick={handleCheckboxChange}>
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul className="nav-links">
                <li><a href="index.html">Início</a></li>
                <li><a href="about-pt-br.html">Sobre Nós</a></li>
                <li><a href="index-en.html">English</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    
    </div>

  );
};

export default Menu;