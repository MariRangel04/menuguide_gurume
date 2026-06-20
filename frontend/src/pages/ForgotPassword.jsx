export default function ForgotPassword() {

  return (

    <div style={styles.container}>

      <form style={styles.form}>

        <h1>Recuperar Senha</h1>

        <input
          type="email"
          placeholder="Digite seu email"
          style={styles.input}
        />

        <button
          type="submit"
          style={styles.button}
        >
          Enviar Recuperação
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
    border: "none"
  },

  button: {
    padding: "14px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#01a78f",
    color: "#fff",
    fontWeight: "bold"
  }

}