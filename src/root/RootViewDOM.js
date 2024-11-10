import { handleLogout } from "../utils/AuthManager";
import { Button } from "../utils/CommonDOM";
import { SignInForm } from "./signin/SignInViewDOM";
import { getMemberNickname } from "../utils/TokenUtils";
import ReactDOM from 'react-dom/client';

export function WelcomePhrase({ isAuthenticated }) {
    const token = localStorage.getItem("access_token");

    const username = isAuthenticated ? getMemberNickname(token) : "guest";

    return (
        <h2 className="text-center">
            Hello {username}, <br />
            You're Welcomed very much!
        </h2>
    );
}

export function LogoutButton({ authenticated, setAuthenticated }) {

    if (!authenticated) {
        return null;
    }

    const logoutHandler = () => handleLogout(setAuthenticated);

    return (
        <Button name="Logout" clickHandler={logoutHandler} />
    )
}

export function LoadSignInComponentButton({ authenticated, setAuthenticated }) {

    if (authenticated) {
        return null;
    }

    function handleClick(e) {
        const parent = e.target.parentElement;

        const root = ReactDOM.createRoot(parent);
        root.render(<SignInForm whenAuthenticated={setAuthenticated} />);
    }

    return (
        <Button 
        id="load-sign-in-component-button" 
        name="SignIn" 
        classListAdd="btn-green"
        clickHandler={handleClick} />
    )
}
