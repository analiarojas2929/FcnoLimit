import { useState } from 'react';
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonItem, 
  IonLabel, 
  IonInput,
  IonIcon 
} from '@ionic/react';
import {
  footballOutline,
} from "ionicons/icons";
import { 
  mailOutline, 
  lockClosedOutline, 
  logInOutline, 
  personAddOutline 
} from 'ionicons/icons';
import './AuthPage.css';

const AuthPage: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirm, setRegisterConfirm] = useState('');

  const handleLogin = () => {
    alert('Inicio de sesión exitoso');
  };

  const handleRegister = () => {
    if (registerPassword !== registerConfirm) {
      alert('Las contraseñas no coinciden');
      return;
    }
    alert('Cuenta creada exitosamente');
  };

  return (
    <IonPage className="auth-page">
      <IonHeader className="ion-no-border">
        <IonToolbar color="transparent">
          <IonTitle className="ion-text-center custom-title">
            {showLogin ? 'Bienvenido de Vuelta' : 'Únete a Nosotros'}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="auth-container">
          <div className="logo-container">
            <div className="logo-icon-container">
              <IonIcon icon={footballOutline} className="logo-icon" />
            </div>
            <h1 className="brand-title">
              FCnoLimit
            </h1>
            <p className="brand-subtitle">
              Tu camino hacia el éxito deportivo
            </p>
          </div>
          
          <div className="auth-toggle-buttons">
            <IonButton 
              fill={showLogin ? 'solid' : 'outline'} 
              onClick={() => setShowLogin(true)}
              color="secondary"
            >
              Iniciar Sesión
            </IonButton>
            <IonButton 
              fill={!showLogin ? 'solid' : 'outline'} 
              onClick={() => setShowLogin(false)}
              color="secondary"
            >
              Crear Cuenta
            </IonButton>
          </div>
          
          <div className="auth-form">
            {showLogin ? (
              <form onSubmit={e => { e.preventDefault(); handleLogin(); }} className="slide-in">
                <IonItem className="custom-input">
                  <IonLabel position="floating">
                    <IonIcon icon={mailOutline} />
                    Correo Electrónico
                  </IonLabel>
                  <IonInput
                    type="email"
                    value={email}
                    onIonChange={e => setEmail(e.detail.value!)}
                    required
                    className="custom-input-field"
                    placeholder="ejemplo@correo.com"
                  />
                </IonItem>
                
                <IonItem className="custom-input">
                  <IonLabel position="floating">
                    <IonIcon icon={lockClosedOutline} />
                    Contraseña
                  </IonLabel>
                  <IonInput
                    type="password"
                    value={password}
                    onIonChange={e => setPassword(e.detail.value!)}
                    required
                    className="custom-input-field"
                    placeholder="••••••••"
                  />
                </IonItem>

                <IonButton expand="block" type="submit" className="submit-button">
                  <IonIcon icon={logInOutline} slot="start" />
                  Iniciar Sesión
                </IonButton>
              </form>
            ) : (
              <form onSubmit={e => { e.preventDefault(); handleRegister(); }} className="slide-in">
                <IonItem className="custom-input">
                  <IonLabel position="floating">
                    <IonIcon icon={mailOutline} />
                    Correo Electrónico
                  </IonLabel>
                  <IonInput
                    type="email"
                    value={registerEmail}
                    onIonChange={e => setRegisterEmail(e.detail.value!)}
                    required
                    className="custom-input-field"
                    placeholder="ejemplo@correo.com"
                  />
                </IonItem>
                
                <IonItem className="custom-input">
                  <IonLabel position="floating">
                    <IonIcon icon={lockClosedOutline} />
                    Contraseña
                  </IonLabel>
                  <IonInput
                    type="password"
                    value={registerPassword}
                    onIonChange={e => setRegisterPassword(e.detail.value!)}
                    required
                    className="custom-input-field"
                    placeholder="••••••••"
                  />
                </IonItem>
                
                <IonItem className="custom-input">
                  <IonLabel position="floating">
                    <IonIcon icon={lockClosedOutline} />
                    Confirmar Contraseña
                  </IonLabel>
                  <IonInput
                    type="password"
                    value={registerConfirm}
                    onIonChange={e => setRegisterConfirm(e.detail.value!)}
                    required
                    className="custom-input-field"
                    placeholder="••••••••"
                  />
                </IonItem>
                
                <IonButton expand="block" type="submit" className="submit-button">
                  <IonIcon icon={personAddOutline} slot="start" />
                  Crear Cuenta
                </IonButton>
              </form>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AuthPage;