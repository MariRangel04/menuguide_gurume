export default function SearchBar({
  search,
  setSearch
}) {

  return (

    <input
      type="text"
      placeholder="🔍 Buscar prato..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      style={styles.input}
    />

  )

}

const styles = {

  input: {
    width: "100%",
    maxWidth: "500px",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    marginBottom: "25px",
    fontSize: "15px"
  }

}