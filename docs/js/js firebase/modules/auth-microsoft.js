import {
    getAuth,
    onAuthStateChanged,
    GithubAuthProvider,
    MicrosoftAuthProvider,
    signInWithPopup,
    signOut,
  } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
  
  export function authMicrosoft(app) {
    const d = document,
          auth = getAuth(app),
          provider = new MicrosoftAuthProvider(), // Proveedor de Microsoft
          $appAuthMicrosoft = d.getElementById("app-auth-microsoft");
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Usuario autenticado con Microsoft
        $appAuthMicrosoft.innerHTML = `
          <p>Contenido para usuarios de Microsoft</p>
          <button id="microsoft-logout">Salir</button>
          <p>Bienvenido ${user.displayName}</p>
          <img src="${user.photoURL}" alt="${user.displayName}">
        `;
      } else {
        // Usuario no autenticado
        $appAuthMicrosoft.innerHTML = `<p>Contenido exclusivo para usuarios de Microsoft</p>`;
      }
    });
  
    d.addEventListener("click", (e) => {
      if (e.target.matches("#microsoft-login")) {
        alert("Ingresando con Microsoft");
  
        signInWithPopup(auth, provider)
          .then((res) => {
            $appAuthMicrosoft.innerHTML = `<p>Bienvenido ${res.user.displayName}</p>`;
          })
          .catch((err) => {
            $appAuthMicrosoft.innerHTML = `<p>Error: <i>${err.code}</i> - <b>${err.message}</b></p>`;
          });
      }
  
      if (e.target.matches("#microsoft-logout")) {
        alert("Cerrando sesión con Microsoft");
        signOut(auth);
      }
    });
  }
  