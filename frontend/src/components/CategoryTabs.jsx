export default function CategoryTabs({
  categorias,
  categoriaSelecionada,
  setCategoriaSelecionada
}) {

  return (

    <div style={styles.container}>

      {categorias.map(cat => (

        <button
          key={cat}
          onClick={() => setCategoriaSelecionada(cat)}
          style={{
            ...styles.tab,
            backgroundColor:
              categoriaSelecionada === cat
                ? "#01a78f"
                : "#fff",
            color:
              categoriaSelecionada === cat
                ? "#fff"
                : "#000"
          }}
        >
          {cat}
        </button>

      ))}

    </div>

  )

}

const styles = {
  container: {
    display: "flex",
    overflowX: "auto",
    gap: 10,
    padding: "10px 0"
  },

  tab: {
    padding: "10px 15px",
    borderRadius: 20,
    border: "1px solid #ddd",
    whiteSpace: "nowrap",
    cursor: "pointer"
  }
}