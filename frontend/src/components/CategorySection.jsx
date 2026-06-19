import DishCard from "./DishCard"

export default function CategorySection({
  titulo,
  pratos,
  onDishClick
}) {

  return (

    <section>

      <h2>{titulo}</h2>

      <div style={styles.grid}>

        {pratos.map(prato => (

          <DishCard
            key={prato._id}
            prato={prato}
            onClick={() =>
            onDishClick(prato)}
          />

        ))}

      </div>

    </section>

  )

}

const styles = {

  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px"
  }

}