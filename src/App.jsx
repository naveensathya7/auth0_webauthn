// src/App.jsx
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Auth0 WebAuthn (Biometric/Fingerprint) Login Demo</h1>
      {!isAuthenticated ? (
        <button
          onClick={() =>
            loginWithRedirect({
              authorizationParams: {
                prompt: "login",
                // Optionally, force a specific connection if you have a custom WebAuthn connection
                // connection: "webauthn",
              },
            })
          }
          style={{
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            cursor: "pointer",
            borderRadius: "8px",
            border: "none",
            background: "#eb5424",
            color: "#fff",
          }}
        >
          Login with Biometrics
        </button>
      ) : (
        <div>
          <h2>Welcome, {user.name || user.email}!</h2>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            style={{
              padding: "0.5rem 1.5rem",
              fontSize: "1rem",
              cursor: "pointer",
              borderRadius: "8px",
              border: "none",
              background: "#333",
              color: "#fff",
              marginTop: "2rem",
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
