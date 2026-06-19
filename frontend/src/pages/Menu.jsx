import { useEffect, useState } from "react"
import axios from "axios"

import CategoryTabs from "../components/CategoryTabs"
import DishGrid from "../components/DishGrid"
import DishDetails from "../components/DishDetails"
import SearchBar from "../components/SearchBar"

export default function Menu() {

  const [pratos, setPratos] = useState([])
  const [categoria, setCategoria] = useState("Entradas")
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState(null)

  useEffect(() => {

    axios.get("http://localhost:3000/dishes")
      .then(res => setPratos(res.data))

  }, [])

  const categorias = [
    "Entradas",
    "Brisas",
    "Sashimi",
    "Sushi",
    "Rolls",
    "Combinados",
    "Pratos Quentes",
    "VegMê",
    "Sobremesas",
    "Bebidas"
  ]

  const filtrados = pratos.filter(p =>
    p.categoria === categoria &&
    p.nome.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div style={{ padding: 20 }}>

      <h1>🍣 Gurumê</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <CategoryTabs
        categorias={categorias}
        categoriaSelecionada={categoria}
        setCategoriaSelecionada={setCategoria}
      />

      <DishGrid
        pratos={filtrados}
        onSelect={setSelected}
      />

      <DishDetails
        dish={selected}
        close={() => setSelected(null)}
      />

    </div>

  )
}