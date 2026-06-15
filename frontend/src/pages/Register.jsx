import { useState } from "react"
import axios from "axios"

export default function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("funcionario")

  async function handleRegister(e) {

    e.preventDefault()

    try {

      const response = await axios.post(
        "http://localhost:3000/auth/register",
        {
          name,
          email,
          password,
          role
        }
      )

      alert("Cadastro realizado")

      console.log(response.data)

    } catch (error) {

      alert(error.response.data.message)

    }

  }

  return (

    <div style={styles.container}>

      <form style={styles.form} onSubmit={handleRegister}>

        <h1>Cadastro</h1>

        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.input}
        >

          <option value="funcionario">
            Funcionário
          </option>

          <option value="admin">
            Administrador
          </option>

        </select>

        <button type="submit" style={styles.button}>
          Cadastrar
        </button>

      </form>

    </div>

  )

}

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ece4d9"
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
    outline: "none"
  },

  button: {
    padding: "14px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#01a78f",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer"
  }

}