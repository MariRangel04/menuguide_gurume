import logo from "../assets/gurume_logo.png"
import logo2 from "../assets/gurume_logo2.png"

export default function Home() {

  return (

    <div style={styles.container}>

      <img
        src={logo}
        alt="logo"
        style={styles.logo}
      />

      <img
        src={logo2}
        alt="logo2"
        style={styles.logo2}
      />

      <button
        style={styles.button}
        onClick={() => window.location.href = "/login"}
      >
        Entrar
      </button>

    </div>

  )

}

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px",
    backgroundColor: "#ece4d9"
  },

  logo: {
    width: "100px"
  },

  logo2: {
    width: "220px"
  },

  button: {
    padding: "14px",
    width: "250px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#01a78f",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer"
  }

}