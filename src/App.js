import { useEffect, useState } from 'react';
import './App.css';
import { isAuthenticated } from './AuthManager';
import { LogoutButton, SignInButton, WelcomePhrase } from './RootViewDOM';
import { fakeAuthenticated } from './TokenUtils';
import { clickSignInButton } from './EventDispatcher';




function App() {
  // fakeAuthenticated();
  setTimeout(clickSignInButton, 500);
  
  
  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다");
  }, []);


  const [authenticated, setAuthenticated] = useState(isAuthenticated());

  return (
    <main className="text-center">
      <WelcomePhrase isAuthenticated={authenticated} />
      <div className="row">
        <SignInButton authenticated={authenticated} setAuthenticated={setAuthenticated} />
        <LogoutButton authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </div>
    </main>
  );
}




export default App;
