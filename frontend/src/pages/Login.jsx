import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import logo from "../assets/gurume_logo.png"
import logo2 from "../assets/gurume_logo2.png"

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  async function handleLogin(e) {

    e.preventDefault()

    try {

      const response = await axios.post(
        "http://localhost:3000/auth/login",
        {
          email,
          password
        }
      )

alert(response.data.message)

localStorage.setItem(
  "role",
  response.data.user.role
)
console.log(response.data.user)

navigate("/menu")

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Erro ao fazer login"
      )

    }

  }

  return (

    <div style={styles.container}>

      <div style={styles.logoArea}>

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

      </div>

      <form
        style={styles.form}
        onSubmit={handleLogin}
      >

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={styles.input}
        />

        <button
          type="submit"
          style={styles.button}
        >
          Entrar
        </button>

<Link
  to="/forgot"
  style={styles.link}
>
  Esqueceu a senha?
</Link>

<Link
  to="/register"
  style={styles.link}
>
  Não possui cadastro?
</Link>

      </form>

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
    backgroundColor: "#ece4d9",
    gap: "25px"
  },

  logoArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px"
  },

  logo: {
    width: "100px"
  },

  logo2: {
    width: "220px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "320px"
  },

  input: {
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    fontSize: "15px"
  },

  button: {
    padding: "14px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#01a78f",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "15px"
  },

  link: {
    textAlign: "center",
    textDecoration: "none",
    color: "#000",
    fontSize: "14px"
  }

}