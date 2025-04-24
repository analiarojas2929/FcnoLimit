import { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonInput } from '@ionic/react';
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
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center">
            {showLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="auth-container">
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
              <form onSubmit={e => { e.preventDefault(); handleLogin(); }}>
                <IonItem>
                  <IonLabel position="floating">Correo Electrónico</IonLabel>
                  <IonInput
                    type="email"
                    value={email}
                    onIonChange={e => setEmail(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Contraseña</IonLabel>
                  <IonInput
                    type="password"
                    value={password}
                    onIonChange={e => setPassword(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonButton expand="block" type="submit" color="secondary">
                  Iniciar Sesión
                </IonButton>
              </form>
            ) : (
              <form onSubmit={e => { e.preventDefault(); handleRegister(); }}>
                <IonItem>
                  <IonLabel position="floating">Correo Electrónico</IonLabel>
                  <IonInput
                    type="email"
                    value={registerEmail}
                    onIonChange={e => setRegisterEmail(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Contraseña</IonLabel>
                  <IonInput
                    type="password"
                    value={registerPassword}
                    onIonChange={e => setRegisterPassword(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Confirmar Contraseña</IonLabel>
                  <IonInput
                    type="password"
                    value={registerConfirm}
                    onIonChange={e => setRegisterConfirm(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonButton expand="block" type="submit" color="secondary">
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