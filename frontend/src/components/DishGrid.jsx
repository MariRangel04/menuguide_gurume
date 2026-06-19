import DishCard from "./DishCard"

export default function DishGrid({
  pratos,
  onSelect
}) {

  return (

    <div style={styles.grid}>

      {pratos.map(prato => (

        <DishCard
          key={prato._id}
          prato={prato}
          onClick={() => onSelect(prato)}
        />

      ))}

    </div>

  )

}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 15
  }
}