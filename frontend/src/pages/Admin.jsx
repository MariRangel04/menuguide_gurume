import { useEffect, useState } from "react"
import axios from "axios"

export default function Admin() {

  const [pratos, setPratos] = useState([])
  const [editing, setEditing] = useState(null)
  const [tab, setTab] = useState("list")

  const alergicosList = [
    "glúten",
    "lactose",
    "ovo",
    "peixe",
    "crustáceos",
    "soja",
    "amendoim"
  ]

  const categorias = [
    "Entradas",
    "Brisas",
    "Sashimi",
    "Sushi",
    "Rolls",
    "Combinados",
    "VegMê",
    "Sobremesas",
    "Bebidas"
  ]

  useEffect(() => {
    carregar()
  }, [])

  async function carregar() {
    const res = await axios.get("http://localhost:3000/dishes")
    setPratos(res.data)
  }

  function iniciarNovo() {
    setEditing({
      nome: "",
      descricao: "",
      preco: "",
      categoria: "Entradas",
      imagem: "",
      alergenicos: []
    })
    setTab("form")
  }

  function editar(prato) {
    setEditing(prato)
    setTab("form")
  }

  function toggleAlergeno(item) {
    const atual = editing.alergenicos || []

    const existe = atual.includes(item)

    const novo = existe
      ? atual.filter(a => a !== item)
      : [...atual, item]

    setEditing({ ...editing, alergenicos: novo })
  }

  async function salvar() {

    if (editing._id) {
      await axios.put(
        `http://localhost:3000/dishes/${editing._id}`,
        editing
      )
    } else {
      await axios.post(
        "http://localhost:3000/dishes",
        editing
      )
    }

    setTab("list")
    setEditing(null)
    carregar()
  }

  async function deletar(id) {
    await axios.delete(`http://localhost:3000/dishes/${id}`)
    carregar()
  }

  return (

    <div style={styles.container}>

      <h1>🍣 Admin Restaurante</h1>

      {/* NAV */}
      <div style={styles.nav}>

        <button onClick={() => setTab("list")}>
          Lista
        </button>

        <button onClick={iniciarNovo}>
          + Novo prato
        </button>

      </div>

      {/* LISTA */}
      {tab === "list" && (

        <div style={styles.grid}>

          {pratos.map(p => (

            <div key={p._id} style={styles.card}>

              <h3>{p.nome}</h3>
              <p>{p.categoria}</p>
              <p>R$ {p.preco}</p>

              <div style={styles.actions}>

                <button onClick={() => editar(p)}>
                  Editar
                </button>

                <button onClick={() => deletar(p._id)}>
                  Excluir
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

      {/* FORM */}
      {tab === "form" && editing && (

        <div style={styles.form}>

          <h2>
            {editing._id ? "Editar prato" : "Novo prato"}
          </h2>

          <input
            placeholder="Nome"
            value={editing.nome}
            onChange={e =>
              setEditing({ ...editing, nome: e.target.value })
            }
          />

          <textarea
            placeholder="Descrição"
            value={editing.descricao}
            onChange={e =>
              setEditing({ ...editing, descricao: e.target.value })
            }
          />

          <input
            placeholder="Preço"
            value={editing.preco}
            onChange={e =>
              setEditing({ ...editing, preco: e.target.value })
            }
          />

          <input
            placeholder="URL imagem"
            value={editing.imagem}
            onChange={e =>
              setEditing({ ...editing, imagem: e.target.value })
            }
          />

          {/* CATEGORIA */}
          <select
            value={editing.categoria}
            onChange={e =>
              setEditing({ ...editing, categoria: e.target.value })
            }
          >
            {categorias.map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>

          {/* ALERGÊNICOS */}
          <div style={styles.section}>

            <h4>Alergênicos</h4>

            <div style={styles.checks}>

              {alergicosList.map(a => (

                <label key={a} style={styles.check}>

                  <input
                    type="checkbox"
                    checked={editing.alergenicos?.includes(a)}
                    onChange={() => toggleAlergeno(a)}
                  />

                  {a}

                </label>

              ))}

            </div>

          </div>

          {/* BOTÕES */}
          <div style={styles.actions}>

            <button onClick={salvar}>
              Salvar
            </button>

            <button onClick={() => setTab("list")}>
              Cancelar
            </button>

          </div>

        </div>

      )}

    </div>

  )
}

const styles = {

  container: {
    padding: 20,
    background: "#f4f4f4",
    minHeight: "100vh"
  },

  nav: {
    display: "flex",
    gap: 10,
    marginBottom: 20
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 10
  },

  card: {
    background: "#fff",
    padding: 15,
    borderRadius: 12
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    maxWidth: 500
  },

  section: {
    marginTop: 10
  },

  checks: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10
  },

  check: {
    fontSize: 14
  },

  actions: {
    display: "flex",
    gap: 10,
    marginTop: 10
  }

}