import { useEffect, useState } from "react"
import axios from "axios"

import SearchBar from "../components/SearchBar"
import DishGrid from "../components/DishGrid"
import DishDetails from "../components/DishDetails"

export default function Menu() {

  const [pratos, setPratos] = useState([])
  const [categoria, setCategoria] = useState("Entradas")
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState(null)

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

  const filtrados = pratos.filter(p => {
    return (
      p.categoria === categoria &&
      p.nome.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (

    <div style={styles.container}>

      {/* HEADER APP */}
      <div style={styles.header}>
        <h1>🍣 Gurumê</h1>
      </div>

      {/* SEARCH */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* ABAS FIXAS */}
      <div style={styles.tabs}>
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            style={{
              ...styles.tab,
              background: categoria === cat ? "#01a78f" : "#fff",
              color: categoria === cat ? "#fff" : "#000"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID DE PRATOS */}
      <DishGrid
        pratos={filtrados}
        onSelect={setSelected}
      />

      {/* MODAL DETALHES */}
      <DishDetails
        dish={selected}
        close={() => setSelected(null)}
      />

    </div>
  )
}

const styles = {

  container: {
    padding: 15,
    background: "#ece4d9",
    minHeight: "100vh"
  },

  header: {
    textAlign: "center",
    marginBottom: 10
  },

  tabs: {
    display: "flex",
    gap: 8,
    overflowX: "auto",
    padding: "10px 0"
  },

  tab: {
    padding: "8px 12px",
    borderRadius: 20,
    border: "1px solid #ddd",
    cursor: "pointer",
    whiteSpace: "nowrap"
  }

}