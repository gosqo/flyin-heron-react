import { Button } from "../../utils/CommonDOM";

export function SignInForm() {
    function handleSignIn(e) {
        e.preventDefault();

        alert("clicked.");
    }

    return (
        <>
            <form>
                <div className="input-row" >
                    <h3 classNmae="">Please sign in here.</h3>
                </div>
                
                <div className="input-row" >
                    <label htmlFor="email" >email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                    />
                </div>

                <div className="input-row">
                    <label htmlFor="password" >password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                    />
                </div>

                <div className="row text-center">
                    <Button
                        id="sign-in-button"
                        name="Sign-in"
                        classListAdd="btn-green"
                        clickHandler={handleSignIn} />
                </div>
            </form >
        </>
    );
}
