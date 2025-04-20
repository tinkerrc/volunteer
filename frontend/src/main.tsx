import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(<Auth0Provider
    domain="dev-71ch67bjahab7qg3.us.auth0.com"
    clientId="kDMwJpEeqPfwTXNaZA1mrKg2juQiTylR"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,);
