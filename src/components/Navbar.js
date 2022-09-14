import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];

  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavOpen(false);
  };

  return (
    <nav className="navBar">
      <button type="button" onClick={handleToggle}>
        {navOpen ? (
          <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
        )}
      </button>
      <ul className={`menuNav ${navOpen ? ' showMenu' : ''}`}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              exact
              to={link.path}
              activeClassName="active-link"
              onClick={() => closeMenu()}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
