import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(<Auth0Provider
    domain="dev-v8cbdhmtmu4lj338.us.auth0.com"
    clientId="xtR3z01pmtfqLnsC2Y2Vjl25pLTPDkQC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,);
