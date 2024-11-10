function parseJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(window.atob(base64)
        .split("")
        .map(function (c) {
            return "%"
                + ("00" + c.charCodeAt(0).toString(16))
                    .slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
}

export function getMemberNickname(token) {
    return parseJwt(token).nickname;
}

export function fakeAuthenticated() {
    localStorage.setItem("access_token", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmlja25hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.sN9kLkzMrnkTwEk8fVIsGI3SIdM97F0M1ug_5yC1kz8");
}
