export default function DishDetails({ dish, close }) {

  if (!dish) return null

  return (

    <div style={styles.overlay} onClick={close}>

      <div style={styles.modal} onClick={e => e.stopPropagation()}>

        <img src={dish.imagem} style={styles.img} />

        <h2>{dish.nome}</h2>

        <p>{dish.descricao}</p>

        <h4>Alérgenos</h4>
        <p>{dish.alergenicos?.join(", ") || "Nenhum"}</p>

        {dish.molhos?.length > 0 && (
          <>
            <h4>Molhos</h4>
            <p>{dish.molhos.join(", ")}</p>
          </>
        )}

        {dish.finalizacao?.length > 0 && (
          <>
            <h4>Finalização do dia</h4>
            <p>{dish.finalizacao.join(", ")}</p>
          </>
        )}

        <button onClick={close}>Fechar</button>

      </div>

    </div>

  )

}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  modal: {
    background: "#fff",
    padding: 20,
    borderRadius: 12,
    width: 320
  },

  img: {
    width: "100%",
    borderRadius: 10
  }
}