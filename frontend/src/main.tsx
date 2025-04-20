import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(<Auth0Provider
  domain="dev-v8cbdhmtmu4lj338.us.auth0.com"
  clientId="xtR3z01pmtfqLnsC2Y2Vjl25pLTPDkQC"
  authorizationParams={{
    redirect_uri: window.location.origin,
    audience: "https://api.yolovms.org",
    scope: "read:current_user update:current_user_metadata"
  }}
>
  <App />
</Auth0Provider>,);

