import React from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import './InicioPage.css';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';
import CardList from '../components/CardList';
import 'bootstrap/dist/css/bootstrap.min.css';

const InicioPage: React.FC = () => {
  return (
    <IonPage>
      <div className="tab1-background" />
      <NavBar />
      <IonContent fullscreen>
        <div className="hero-section">
          <h1 className="main-title">FCnoLimit</h1>
          <p className="hero-subtitle">La plataforma definitiva para el fútbol amateur</p>
          <div className="hero-buttons">
            <IonButton routerLink="/register" color="primary" size="large">
              ¡Únete ahora!
            </IonButton>
            <IonButton routerLink="/matches" color="secondary" size="large">
              Ver partidos
            </IonButton>
          </div>
        </div>
        <div className="content-container">
          <section className="news-section">
            <h2 className="section-title">Últimas Noticias</h2>
            <Carousel />
          </section>
          <section className="highlights-section">
            <h2 className="section-title">Destacados</h2>
            <CardList />
          </section>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default InicioPage;
