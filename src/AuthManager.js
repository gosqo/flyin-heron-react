export function isAuthenticated() {
  const accessToken = localStorage.getItem("access_token");

  return accessToken !== null && accessToken.startsWith("Bearer ");
}

export function handleLogout(setAuthenticated) {
  const confirmation = global.confirm("로그아웃 하시겠습니까?");
  
  if (!confirmation) {
    return;
  }

  localStorage.removeItem("access_token");
  setAuthenticated(false);
}