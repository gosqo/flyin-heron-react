import { handleLogout } from "./AuthManager";
import { Button } from "./CommonDOM";
import { clickSignInButton } from "./EventDispatcher";
import { SignInForm } from "./SignInViewDOM";
import { getMemberNickname } from "./TokenUtils";
import ReactDOM from 'react-dom/client';

export function WelcomePhrase({ isAuthenticated }) {
    const token = localStorage.getItem("access_token");

    const username = isAuthenticated ? getMemberNickname(token) : "guest";

    return (
        <h2>
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

export function SignInButton({ authenticated, setAuthenticated }) {

    if (authenticated) {
        return null;
    }

    function handleClick(e) {
        const parent = e.target.parentElement;

        const root = ReactDOM.createRoot(parent);
        root.render(<SignInForm />);
    }

    return (
        <Button id="sign-in-button" name="SignIn" clickHandler={handleClick} />
    )
}
