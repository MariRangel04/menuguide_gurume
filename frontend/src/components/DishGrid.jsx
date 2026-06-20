import DishCard from "./DishCard"

export default function DishGrid({
  pratos,
  onSelect,
  onEdit
}) {

  const isAdmin =
    localStorage.getItem("role") === "admin"

  return (

    <div style={styles.grid}>

      {pratos.map(prato => (

        <div
          key={prato._id}
          style={styles.cardContainer}
        >

          <DishCard
            prato={prato}
            onClick={() => onSelect(prato)}
          />

          {isAdmin && (

            <button
              style={styles.editButton}
              onClick={() => onEdit(prato)}
            >
              ✏️ Editar
            </button>

          )}

        </div>

      ))}

    </div>

  )

}

const styles = {

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 15
  },

  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  },

  editButton: {
    padding: "8px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#01a78f",
    color: "#fff",
    cursor: "pointer"
  }

}