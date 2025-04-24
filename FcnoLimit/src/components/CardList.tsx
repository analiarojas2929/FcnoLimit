import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonBadge, IonIcon } from '@ionic/react';
import { locationOutline, timeOutline, peopleOutline, footballOutline } from 'ionicons/icons';
import './CardList.css';

interface MatchCard {
  id: number;
  title: string;
  date: string;
  location: string;
  level: string;
  spots: number;
  image: string;
  time: string;
  price: string;
}

const matches: MatchCard[] = [
  {
    id: 1,
    title: "Partido Amistoso",
    date: "26 Abril",
    time: "18:00",
    location: "Cancha Municipal",
    level: "Intermedio",
    spots: 4,
    price: "$5.000",
    image: "/assets/matches/match1.jpg"
  },
  // ...otros partidos
];

const CardList: React.FC = () => {
  return (
    <div className="card-grid">
      {matches.map((match) => (
        <IonCard key={match.id} className="match-card">
          <div className="card-layout">
            <div 
              className="card-image" 
              style={{ backgroundImage: `url(${match.image})` }}
            >
              <div className="image-overlay">
                <IonBadge color="warning" className="spots-badge">
                  <IonIcon icon={peopleOutline} /> {match.spots} lugares
                </IonBadge>
                <IonBadge color="success" className="price-badge">
                  {match.price}
                </IonBadge>
              </div>
            </div>
            
            <div className="card-content">
              <IonCardHeader>
                <div className="header-content">
                  <h3 className="card-title">{match.title}</h3>
                  <IonBadge color="primary" className="level-badge">
                    <IonIcon icon={footballOutline} /> {match.level}
                  </IonBadge>
                </div>
              </IonCardHeader>
              
              <IonCardContent>
                <div className="match-details">
                  <div className="detail-item">
                    <IonIcon icon={timeOutline} />
                    <span>{match.date} - {match.time}</span>
                  </div>
                  <div className="detail-item">
                    <IonIcon icon={locationOutline} />
                    <span>{match.location}</span>
                  </div>
                </div>
                <button className="join-button">
                  Unirse al partido
                </button>
              </IonCardContent>
            </div>
          </div>
        </IonCard>
      ))}
    </div>
  );
};

export default CardList;