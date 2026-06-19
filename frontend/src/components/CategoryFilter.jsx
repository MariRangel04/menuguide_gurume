export default function CategoryFilter({
  categorias,
  categoriaSelecionada,
  setCategoriaSelecionada
}) {

  return (

    <div style={styles.container}>

      {categorias.map(categoria => (

        <button
          key={categoria}
          onClick={() =>
            setCategoriaSelecionada(categoria)
          }
          style={{
            ...styles.button,

            backgroundColor:
              categoriaSelecionada === categoria
                ? "#01a78f"
                : "#fff",

            color:
              categoriaSelecionada === categoria
                ? "#fff"
                : "#000"
          }}
        >
          {categoria}
        </button>

      ))}

    </div>

  )

}

const styles = {

  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "30px"
  },

  button: {
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
fontSize: "14px",
boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  }

}