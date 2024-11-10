export function clickSignInButton() {
    const signInButton = document.querySelector("#load-sign-in-component-button");
    
    // React 이벤트 시스템은 실제 DOM 이벤트와 다른 합성 이벤트(SyntheticEvent)를 사용합니다.
    // 단순히 DOM dispatchEvent()를 호출하는 것으로는 React의 이벤트 핸들러가 트리거되지 않습니다.
    // React 컴포넌트의 이벤트 핸들러를 직접 호출하거나 React Testing Library 같은 도구를 사용해야 합니다.
    if (signInButton) {
        signInButton.click();
    }
}
