import { useEffect, useState } from 'react';
import { isAuthenticated } from '../utils/AuthManager';
import { LogoutButton, LoadSignInComponentButton, WelcomePhrase } from './RootViewDOM';
import { fakeAuthenticated } from '../utils/TokenUtils';
import { clickSignInButton } from '../utils/EventDispatcher';
import './App.css';
import "../style/form.scss"
import { Button } from '../utils/CommonDOM';

function App() {
  fakeAuthenticated();
  // setTimeout(clickSignInButton, 500);

  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다");
  }, []);

  const [authenticated, setAuthenticated] = useState(isAuthenticated());

  return (
    <main>
      <WelcomePhrase isAuthenticated={authenticated} />
      <div className="row">
        <LoadSignInComponentButton authenticated={authenticated} setAuthenticated={setAuthenticated} />
        <LogoutButton authenticated={authenticated} setAuthenticated={setAuthenticated} />
        <Button name="empty" />
      </div>
      <div className="end-row" />
    </main>
  );
}




export default App;
