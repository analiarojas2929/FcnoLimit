import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { football, people, trophy, list, podium, home, person, statsChart, gitCompare, logIn } from 'ionicons/icons';
import { useHistory, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const mainNavItems = [
    { path: '/inicio', icon: home, text: 'Inicio' },
    { path: '/clasificaciones', icon: statsChart, text: 'Clasificaciones' },
    { path: '/equipos', icon: people, text: 'Equipos' },
    { path: '/jugadores', icon: person, text: 'Jugadores' },
    { path: '/partidos', icon: football, text: 'Partidos' },
    { path: '/comparativas', icon: gitCompare, text: 'Comparativas' },
  ];

  const authNavItems = [
    { path: '/auth', icon: logIn, text: 'Auth' },
  ];

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <IonIcon icon={football} />
          <div className="brand-text">
            FCnoLimit
            <span className="brand-slogan d-none d-lg-inline">
              El fútbol amateur al siguiente nivel
            </span>
          </div>
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto"> {/* Cambiado a mx-auto para centrar */}
            {mainNavItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <button
                  className={`nav-link btn btn-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => {
                    history.push(item.path);
                    setIsOpen(false);
                  }}
                  type="button"
                >
                  <IonIcon icon={item.icon} />
                  <span>{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav ms-lg-4"> {/* Espaciado adicional en desktop */}
            {authNavItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <button
                  className={`nav-link btn btn-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => {
                    history.push(item.path);
                    setIsOpen(false);
                  }}
                  type="button"
                >
                  <IonIcon icon={item.icon} />
                  <span>{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

