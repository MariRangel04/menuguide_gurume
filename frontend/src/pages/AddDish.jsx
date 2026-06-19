import { useState } from "react"

export default function AddDish() {

  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [preco, setPreco] = useState("")
  const [categoria, setCategoria] = useState("")
  const [imagem, setImagem] = useState("")



  async function handleSubmit(e) {

    e.preventDefault()

    const response = await fetch(
      "http://localhost:3000/dishes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
body: JSON.stringify({
  nome,
  descricao,
  preco: Number(preco),
  categoria,
  imagem
})
      }
    )

    if(response.ok){
      alert("Prato cadastrado!")

      setNome("")
      setDescricao("")
      setPreco("")
      setCategoria("")
      setImagem("")
    }
  }

  return (

    <div style={styles.container}>

      <h1>Novo Prato</h1>

      <form
        onSubmit={handleSubmit}
        style={styles.form}
      >

        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={styles.input}
        />

        <input
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          style={styles.input}
        />

        <input
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          style={styles.input}
        />
        <input
  placeholder="URL da imagem"
  value={imagem}
  onChange={(e) => setImagem(e.target.value)}
  style={styles.input}
/>

        <select
  value={categoria}
  onChange={(e) => setCategoria(e.target.value)}
  style={styles.input}
>

  <option value="">
    Selecione uma categoria
  </option>

  <option value="Entradas">
    Entradas
  </option>

  <option value="Brisas">
    Brisas
  </option>

  <option value="Sashimi">
    Sashimi
  </option>

  <option value="Sushi">
    Sushi
  </option>

  <option value="Rolls">
    Rolls
  </option>

  <option value="Combinados">
    Combinados
  </option>

  <option value="VegMê">
    VegMê
  </option>

  <option value="Sobremesas">
    Sobremesas
  </option>

  <option value="Bebidas">
    Bebidas
  </option>

</select>
        <button style={styles.button}>
          Salvar
        </button>

      </form>

    </div>

  )
}

const styles = {

  container: {
    padding: "30px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "300px"
  },

  input: {
    padding: "12px"
  },

  button: {
    padding: "12px",
    backgroundColor: "#01a78f",
    color: "white",
    border: "none",
    borderRadius: "8px"
  }

}